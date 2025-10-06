import { User } from '../../domain/entities/User';

/**
 * User model that represents the data structure from the API
 */
export interface UserModel {
  name: string;
  lastName: string;
  birthDay: string;
  phone?: string;
  document?: {
    type: string;
    number: string;
  };
}

/**
 * Mapper to convert between UserModel and User entity
 */
export class UserMapper {
  /**
   * Convert UserModel to User entity
   * @param model UserModel from API
   * @returns User entity
   */
  static toDomain(model: UserModel): User {
    return {
      id: 'current-user', // Since we only have one user, we use a fixed ID
      name: model.name,
      lastName: model.lastName,
      birthDay: model.birthDay,
      phone: model.phone || '',
      document: model.document || {
        type: 'DNI',
        number: ''
      },
    };
  }

  /**
   * Convert User entity to UserModel
   * @param user User entity
   * @returns UserModel for API
   */
  static toModel(user: User): UserModel {
    return {
      name: user.name,
      lastName: user.lastName,
      birthDay: user.birthDay,
      phone: user.phone,
      document: user.document,
    };
  }
}
