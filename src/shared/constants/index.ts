export const COLORS = {
  primary: '#EF3340', // RIMAC Red
  secondary: '#6F7DFF', // Purple
  tertiary: '#00E0B9', // Teal
  background: '#F8F9FF',
  white: '#FFFFFF',
  black: '#000000',
  darkBlue: '#333D5A',
  gray: '#5E6488',
  lightGray: '#E5E5E5',
  grayline: '#2B304E',
  darkGray: '#03050F',
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 24,
  xsl: 28,
  xxl: 32,
} as const;

export const API_BASE_URL = 'https://rimac-front-end-challenge.netlify.app/api';

export const API_ROUTES = {
  USER: "/user.json",
  PLANS: "/plans.json",
} as const;

export const SCREEN_NAMES = {
  HOME: 'Home',
  PLANS: 'Plans',
  RESUME: 'Resume',
} as const;
