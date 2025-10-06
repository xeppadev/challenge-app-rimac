import { Plan } from '../../domain/entities/Plan';

/**
 * Plan model that represents the data structure from the API
 */
export interface PlanModel {
  name: string;
  price: number;
  description: string[];
  age: number;
}

/**
 * API response wrapper for plans
 */
export interface PlansApiResponse {
  list: PlanModel[];
  message?: string;
}

/**
 * Mapper to convert between PlanModel and Plan entity
 */
export class PlanMapper {
  /**
   * Convert PlanModel to Plan entity
   * @param model PlanModel from API
   * @param index Index to generate unique ID
   * @returns Plan entity
   */
  static toDomain(model: PlanModel, index: number): Plan {
    return {
      id: `plan-${index}`,
      name: model.name,
      price: model.price,
      description: model.description,
      age: model.age,
      createdAt: new Date().toISOString(),
    };
  }

  /**
   * Convert Plan entity to PlanModel
   * @param plan Plan entity
   * @returns PlanModel for API
   */
  static toModel(plan: Plan): PlanModel {
    return {
      name: plan.name,
      price: plan.price,
      description: plan.description,
      age: plan.age,
    };
  }

  /**
   * Convert array of PlanModels to array of Plan entities
   * @param models Array of PlanModels from API
   * @returns Array of Plan entities
   */
  static toDomainArray(models: PlanModel[]): Plan[] {
    return models.map((model, index) => this.toDomain(model, index));
  }
}
