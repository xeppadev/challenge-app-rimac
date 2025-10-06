export const APP_CONFIG = {
  API_TIMEOUT: 10000,
  CACHE_TIME: 5 * 60 * 1000, // 5 minutes
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
} as const;

export const ANIMATION_CONFIG = {
  DURATION: 300,
  EASING: 'ease-in-out',
} as const;

export const STORAGE_KEYS = {
  USER_DATA: '@rimac_app_user',
  SELECTED_PLAN: '@rimac_app_plan',
  APP_SETTINGS: '@rimac_app_settings',
} as const;
