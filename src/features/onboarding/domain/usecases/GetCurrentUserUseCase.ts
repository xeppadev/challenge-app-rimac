import { User } from '../../../onboarding/domain/entities/User';
import { UserRepository } from '../repositories/UserRepository';

/**
 * Use case to get the current user
 */
export class GetCurrentUserUseCase {
  constructor(private userRepository: UserRepository) {}

  /**
   * Execute the use case
   * @returns Promise with the current user
   */
  async execute(): Promise<User> {
    return this.userRepository.getCurrentUser();
  }
}
