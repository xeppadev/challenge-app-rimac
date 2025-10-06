import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { UserRemoteDataSource } from '../datasources/UserRemoteDataSource';
import { UserMapper } from '../models/UserModel';

/**
 * Implementation of the user repository that connects with the data sources
 */
export class UserRepositoryImpl implements UserRepository {
  private remoteDataSource: UserRemoteDataSource;

  constructor() {
    this.remoteDataSource = new UserRemoteDataSource();
  }

  /**
   * Get the current user
   * @returns Promise with the current user
   */
  async getCurrentUser(): Promise<User> {
    const userModel = await this.remoteDataSource.getCurrentUser();
    return UserMapper.toDomain(userModel);
  }

  /**
   * Update user information
   * @param user User to update
   * @returns Promise with the updated user
   */
  async updateUser(user: User): Promise<User> {
    const userModel = UserMapper.toModel(user);
    const updatedModel = await this.remoteDataSource.updateUser(userModel);
    return UserMapper.toDomain(updatedModel);
  }
}
