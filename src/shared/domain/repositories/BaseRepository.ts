import { BaseEntity } from '../entities/BaseEntity';

/**
 * Base repository interface that defines common operations
 * All feature repositories should extend this interface
 */
export interface BaseRepository<T extends BaseEntity> {
  /**
   * Get all entities
   * @returns Promise with an array of entities
   */
  getAll(): Promise<T[]>;

  /**
   * Get an entity by its id
   * @param id ID of the entity
   * @returns Promise with the found entity or null
   */
  getById(id: string): Promise<T | null>;

  /**
   * Create a new entity
   * @param entity Entity to create
   * @returns Promise with the created entity
   */
  create(entity: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<T>;

  /**
   * Update an existing entity
   * @param entity Entity to update
   * @returns Promise with the updated entity
   */
  update(entity: T): Promise<T>;

  /**
   * Delete an entity by its id
   * @param id ID of the entity to delete
   * @returns Promise with boolean indicating success
   */
  delete(id: string): Promise<boolean>;
}
