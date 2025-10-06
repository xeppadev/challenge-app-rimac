import { Dimensions, useWindowDimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const useResponsive = () => {
  const { width, height } = useWindowDimensions();

  const isTablet = width >= 768;
  const isSmallScreen = width < 375;
  const isLargeScreen = width > 414;

  const responsiveWidth = (percentage: number) => (width * percentage) / 100;
  const responsiveHeight = (percentage: number) => (height * percentage) / 100;

  const getResponsiveFontSize = (baseSize: number) => {
    if (isSmallScreen) return baseSize * 0.9;
    if (isLargeScreen) return baseSize * 1.1;
    return baseSize;
  };

  const getResponsiveSpacing = (baseSpacing: number) => {
    if (isSmallScreen) return baseSpacing * 0.8;
    if (isLargeScreen) return baseSpacing * 1.2;
    return baseSpacing;
  };

  return {
    width,
    height,
    screenWidth,
    screenHeight,
    isTablet,
    isSmallScreen,
    isLargeScreen,
    responsiveWidth,
    responsiveHeight,
    getResponsiveFontSize,
    getResponsiveSpacing,
  };
};
