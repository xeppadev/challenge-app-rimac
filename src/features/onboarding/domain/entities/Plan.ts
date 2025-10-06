import { BaseEntity } from '../../../../shared/domain/entities/BaseEntity';

/**
 * Plan entity that represents a plan in the application domain
 */
export interface Plan extends BaseEntity {
  name: string;
  price: number;
  description: string[];
  age: number;
}
