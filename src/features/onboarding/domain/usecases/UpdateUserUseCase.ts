import { User } from '../../../onboarding/domain/entities/User';
import { UserRepository } from '../repositories/UserRepository';

/**
 * Use case to update user information
 */
export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  /**
   * Execute the use case
   * @param user User data to update
   * @returns Promise with the updated user
   */
  async execute(user: User): Promise<User> {
    return this.userRepository.updateUser(user);
  }
}
