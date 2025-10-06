import { User } from '../../../onboarding/domain/entities/entities/User';

/**
 * Interface of the user repository that defines the available operations
 * This is a contract that must be implemented by the concrete repositories
 */
export interface UserRepository {
  /**
   * Get the current user
   * @returns Promise with the user data
   */
  getCurrentUser(): Promise<User>;

  /**
   * Update user information
   * @param user User data to update
   * @returns Promise with the updated user
   */
  updateUser(user: User): Promise<User>;
}
