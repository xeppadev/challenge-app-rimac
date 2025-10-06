import { Plan } from '../entities/Plan';
import { PlanRepository } from '../repositories/PlanRepository';

/**
 * Use case to get all available plans
 */
export class GetAllPlansUseCase {
  constructor(private planRepository: PlanRepository) {}

  /**
   * Execute the use case
   * @returns Promise with all plans
   */
  async execute(): Promise<Plan[]> {
    return this.planRepository.getAllPlans();
  }
}
