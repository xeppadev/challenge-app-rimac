import axios, { AxiosInstance, isAxiosError } from 'axios';
import { API_BASE_URL } from '../../constants';
import { ApiError, ApiErrorCode } from './ApiError';

/**
 * Result of an API call
 */
export interface ApiResult<T> {
  data: T | null;
  error: ApiError | null;
  success: boolean;
}

/**
 * HTTP client configured for the API
 */
export class ApiClient {
  private static instance: ApiClient;
  private client: AxiosInstance;

  private constructor() {
    this.client = axios.create({
      timeout: 10000,
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add request interceptor
    this.client.interceptors.request.use(
      (config) => {
        // log the request
        console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`, {
          params: config.params,
          data: config.data
        });

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Add response interceptor
    this.client.interceptors.response.use(
      (response) => {
        console.log(`✅ API Response: ${response.status} ${response.config.method?.toUpperCase()} ${response.config.url}`);
        return response;
      },
      (error) => {
        if (isAxiosError(error)) {
          const apiError = ApiError.fromAxiosError(error);
          console.error(`❌ API Error: ${error.message}`, apiError.getLogDetails());
        } else {
          console.error(`❌ API Error: ${error.message}`, error);
        }

        return Promise.reject(error);
      }
    );
  }

  /**
   * Get the unique instance of the API client (Singleton pattern)
   */
  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  /**
   * Make a GET request
   * @param url Full URL to the endpoint
   * @returns Promise with ApiResult containing data or error
   */
  async get<T>(url: string): Promise<ApiResult<T>> {
    try {
      const response = await this.client.get<T>(url);
      return {
        data: response.data,
        error: null,
        success: true
      };
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  /**
   * Make a POST request
   * @param url Full URL to the endpoint
   * @param data Data to send
   * @returns Promise with ApiResult containing data or error
   */
  async post<T>(url: string, data: any): Promise<ApiResult<T>> {
    try {
      const response = await this.client.post<T>(url, data);
      return {
        data: response.data,
        error: null,
        success: true
      };
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  /**
   * Make a PUT request
   * @param url Full URL to the endpoint
   * @param data Data to send
   * @returns Promise with ApiResult containing data or error
   */
  async put<T>(url: string, data: any): Promise<ApiResult<T>> {
    try {
      const response = await this.client.put<T>(url, data);
      return {
        data: response.data,
        error: null,
        success: true
      };
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  /**
   * Handle API errors consistently
   * @param error Error caught during API request
   * @returns ApiResult with error information
   */
  private handleError<T>(error: any): ApiResult<T> {
    let apiError: ApiError;

    if (isAxiosError(error)) {
      apiError = ApiError.fromAxiosError(error);
    } else {
      apiError = new ApiError(
        error.message || 'Unknown error occurred',
        ApiErrorCode.UNKNOWN_ERROR,
        error
      );
    }

    return {
      data: null,
      error: apiError,
      success: false
    };
  }
}
