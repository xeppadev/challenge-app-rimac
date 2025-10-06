import { Plan } from '../../domain/entities/Plan';
import { PlanRepository } from '../../domain/repositories/PlanRepository';
import { PlanRemoteDataSource } from '../datasources/PlanRemoteDataSource';
import { PlanMapper } from '../models/PlanModel';

/**
 * Implementation of the plan repository that connects with the data sources
 */
export class PlanRepositoryImpl implements PlanRepository {
  private remoteDataSource: PlanRemoteDataSource;

  constructor() {
    this.remoteDataSource = new PlanRemoteDataSource();
  }

  /**
   * Get all available plans
   * @returns Promise with an array of plans
   */
  async getAllPlans(): Promise<Plan[]> {
    const planModels = await this.remoteDataSource.getAllPlans();
    return PlanMapper.toDomainArray(planModels);
  }

  /**
   * Get a plan by its id
   * @param id ID of the plan
   * @returns Promise with the found plan or null
   */
  async getPlanById(id: string): Promise<Plan | null> {
    try {
      const plans = await this.getAllPlans();
      return plans.find(plan => plan.id === id) || null;
    } catch (error) {
      console.error(`Error getting plan ${id}:`, error);
      return null;
    }
  }

  /**
   * Get plans filtered by age
   * @param age Age to filter plans
   * @returns Promise with filtered plans
   */
  async getPlansByAge(age: number): Promise<Plan[]> {
    const plans = await this.getAllPlans();
    return plans.filter(plan => plan.age <= age);
  }
}
