/**
 * Base entity interface that all domain entities should extend
 */
export interface BaseEntity {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}
