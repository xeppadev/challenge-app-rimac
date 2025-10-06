import { API_ROUTES } from '../../../../shared/constants';
import { ApiError } from '../../../../shared/infrastructure/api/ApiError';
import { ApiClient } from '../../../../shared/infrastructure/api/client';
import { UserModel } from '../models/UserModel';

/**
 * Remote data source for user operations
 */
export class UserRemoteDataSource {
  private apiClient: ApiClient;

  constructor() {
    this.apiClient = ApiClient.getInstance();
  }

  /**
   * Get current user from API
   * @returns Promise with user model
   * @throws ApiError if the request fails
   */
  async getCurrentUser(): Promise<UserModel> {
    const result = await this.apiClient.get<UserModel>(API_ROUTES.USER);

    if (!result.success || !result.data) {
      throw result.error || new ApiError('Failed to fetch user from API');
    }

    return result.data;
  }

  /**
   * Update user information
   * @param user User model to update
   * @returns Promise with updated user model
   * @throws ApiError if the request fails
   */
  async updateUser(user: UserModel): Promise<UserModel> {
    // Note: This endpoint might not exist in the current API
    // This is a placeholder for future implementation
    const result = await this.apiClient.put<UserModel>(API_ROUTES.USER, user);

    if (!result.success || !result.data) {
      throw result.error || new ApiError('Failed to update user');
    }

    return result.data;
  }
}
