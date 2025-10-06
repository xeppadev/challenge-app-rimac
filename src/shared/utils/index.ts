import { Dimensions, PixelRatio } from 'react-native';

// Responsive utilities
export const screenData = Dimensions.get('window');

export const widthPercentageToDP = (widthPercent: number) => {
  return PixelRatio.roundToNearestPixel((screenData.width * widthPercent) / 100);
};

export const heightPercentageToDP = (heightPercent: number) => {
  return PixelRatio.roundToNearestPixel((screenData.height * heightPercent) / 100);
};

// Format utilities
export const formatCurrency = (amount: number, currency = 'PEN'): string => {
  return new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(amount);
};

export const formatPhoneNumber = (phone: string): string => {
  // Remove non-numeric characters
  const cleaned = phone.replace(/\D/g, '');

  // Format as (XXX) XXX XXXX for Peruvian numbers
  if (cleaned.length === 9) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 5)} ${cleaned.slice(5)}`;
  }

  return phone;
};

export const formatDocumentNumber = (document: string): string => {
  // Add spaces every 4 digits for better readability
  return document.replace(/(\d{4})(?=\d)/g, '$1 ');
};

// Validation utilities
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[+]?[\d\s\-\(\)]{9,}$/;
  return phoneRegex.test(phone);
};

export const isValidDocumentNumber = (document: string): boolean => {
  // Peruvian DNI validation (8 digits)
  const dniRegex = /^\d{8}$/;
  return dniRegex.test(document);
};

// Date utilities
export const calculateAge = (birthDate: string | Date): number => {
  try {
    console.log('🔍 calculateAge input:', birthDate, 'type:', typeof birthDate);

    let birth: Date;

    if (typeof birthDate === 'string') {
      // Handle DD-MM-YYYY format (like "02-04-1990")
      const ddMmYyyyMatch = birthDate.match(/^(\d{2})-(\d{2})-(\d{4})$/);

      if (ddMmYyyyMatch) {
        const [, day, month, year] = ddMmYyyyMatch;
        // Create date with correct format: YYYY-MM-DD
        const isoDate = `${year}-${month}-${day}`;
        birth = new Date(isoDate);
        console.log('🔍 DD-MM-YYYY format detected, converted to:', isoDate);
      } else {
        // Try other formats
        birth = new Date(birthDate);
      }
    } else {
      birth = new Date(birthDate);
    }

    const today = new Date();

    console.log('🔍 birth date object:', birth);
    console.log('🔍 today:', today);
    console.log('🔍 birth year:', birth.getFullYear());
    console.log('🔍 today year:', today.getFullYear());

    // Check if the date is valid
    if (isNaN(birth.getTime())) {
      console.warn('Invalid birth date provided:', birthDate);
      return 0;
    }

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    console.log('🔍 initial age calculation:', age);
    console.log('🔍 month difference:', monthDiff);

    // If birthday hasn't occurred this year, subtract 1
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
      console.log('🔍 adjusted age (birthday not yet occurred):', age);
    }

    const finalAge = Math.max(0, age);
    console.log('🔍 final age:', finalAge);

    return finalAge;
  } catch (error) {
    console.error('Error calculating age:', error);
    return 0;
  }
};
