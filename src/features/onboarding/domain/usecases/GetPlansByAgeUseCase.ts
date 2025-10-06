import { Plan } from '../entities/Plan';
import { PlanRepository } from '../repositories/PlanRepository';

/**
 * Use case to get plans filtered by age
 */
export class GetPlansByAgeUseCase {
  constructor(private planRepository: PlanRepository) {}

  /**
   * Execute the use case
   * @param age Age to filter plans
   * @returns Promise with filtered plans
   */
  async execute(age: number): Promise<Plan[]> {
    return this.planRepository.getPlansByAge(age);
  }
}
