/**
 * API Error class that represents errors from API calls
 */
export enum ApiErrorCode {
  NETWORK_ERROR = 'NETWORK_ERROR',
  TIMEOUT_ERROR = 'TIMEOUT_ERROR',
  SERVER_ERROR = 'SERVER_ERROR',
  CLIENT_ERROR = 'CLIENT_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

export class ApiError extends Error {
  public readonly code: ApiErrorCode;
  public readonly status?: number;
  public readonly originalError?: any;

  constructor(
    message: string,
    code: ApiErrorCode = ApiErrorCode.UNKNOWN_ERROR,
    originalError?: any,
    status?: number
  ) {
    super(message);
    this.name = 'ApiError';
    this.code = code;
    this.status = status;
    this.originalError = originalError;
  }

  /**
   * Create an ApiError from an Axios error
   */
  static fromAxiosError(error: any): ApiError {
    if (error.code === 'ECONNABORTED') {
      return new ApiError(
        'Request timeout',
        ApiErrorCode.TIMEOUT_ERROR,
        error
      );
    }

    if (error.code === 'NETWORK_ERROR' || !error.response) {
      return new ApiError(
        'Network error',
        ApiErrorCode.NETWORK_ERROR,
        error
      );
    }

    const status = error.response?.status;
    const message = error.response?.data?.message || error.message;

    if (status >= 500) {
      return new ApiError(
        message || 'Server error',
        ApiErrorCode.SERVER_ERROR,
        error,
        status
      );
    }

    if (status >= 400) {
      return new ApiError(
        message || 'Client error',
        ApiErrorCode.CLIENT_ERROR,
        error,
        status
      );
    }

    return new ApiError(
      message || 'Unknown error',
      ApiErrorCode.UNKNOWN_ERROR,
      error,
      status
    );
  }

  /**
   * Get detailed error information for logging
   */
  getLogDetails() {
    return {
      message: this.message,
      code: this.code,
      status: this.status,
      originalError: this.originalError,
    };
  }
}
