import { Plan } from '@/features/onboarding/domain/entities/Plan';

/**
 * Interface of the plan repository that defines the available operations
 * This is a contract that must be implemented by the concrete repositories
 */
export interface PlanRepository {
  /**
   * Get all available plans
   * @returns Promise with an array of plans
   */
  getAllPlans(): Promise<Plan[]>;

  /**
   * Get a plan by its id
   * @param id ID of the plan
   * @returns Promise with the found plan or null
   */
  getPlanById(id: string): Promise<Plan | null>;

  /**
   * Get plans filtered by age
   * @param age Age to filter plans
   * @returns Promise with filtered plans
   */
  getPlansByAge(age: number): Promise<Plan[]>;
}
