
import { PlanRepositoryImpl } from '../../../features/onboarding/data/repositories/PlanRepositoryImpl';
import { UserRepositoryImpl } from '../../../features/onboarding/data/repositories/UserRepositoryImpl';
import { PlanRepository } from '../../../features/onboarding/domain/repositories/PlanRepository';
import { UserRepository } from '../../../features/onboarding/domain/repositories/UserRepository';
import { GetAllPlansUseCase } from '../../../features/onboarding/domain/usecases/GetAllPlansUseCase';
import { GetCurrentUserUseCase } from '../../../features/onboarding/domain/usecases/GetCurrentUserUseCase';
import { GetPlansByAgeUseCase } from '../../../features/onboarding/domain/usecases/GetPlansByAgeUseCase';
import { UpdateUserUseCase } from '../../../features/onboarding/domain/usecases/UpdateUserUseCase';

/**
 * Centralized dependency provider for the entire application
 * Implements a Singleton pattern to ensure a single instance
 */
export class DependencyProvider {
  private static instance: DependencyProvider;

  // Repositories
  private userRepository: UserRepository;
  private planRepository: PlanRepository;

  // Use cases
  private getCurrentUserUseCase: GetCurrentUserUseCase;
  private updateUserUseCase: UpdateUserUseCase;
  private getAllPlansUseCase: GetAllPlansUseCase;
  private getPlansByAgeUseCase: GetPlansByAgeUseCase;

  private constructor() {
    // Initialize repositories
    this.userRepository = new UserRepositoryImpl();
    this.planRepository = new PlanRepositoryImpl();

    // Initialize use cases
    this.getCurrentUserUseCase = new GetCurrentUserUseCase(this.userRepository);
    this.updateUserUseCase = new UpdateUserUseCase(this.userRepository);
    this.getAllPlansUseCase = new GetAllPlansUseCase(this.planRepository);
    this.getPlansByAgeUseCase = new GetPlansByAgeUseCase(this.planRepository);
  }

  /**
   * Get the unique instance of the dependency provider
   */
  public static getInstance(): DependencyProvider {
    if (!DependencyProvider.instance) {
      DependencyProvider.instance = new DependencyProvider();
    }
    return DependencyProvider.instance;
  }

  /**
   * Get API client instance
   */
  public getApiClient() {
    const { ApiClient } = require('../api/client');
    return ApiClient.getInstance();
  }

  // User dependencies
  public getUserRepository(): UserRepository {
    return this.userRepository;
  }

  public getGetCurrentUserUseCase(): GetCurrentUserUseCase {
    return this.getCurrentUserUseCase;
  }

  public getUpdateUserUseCase(): UpdateUserUseCase {
    return this.updateUserUseCase;
  }

  // Plan dependencies
  public getPlanRepository(): PlanRepository {
    return this.planRepository;
  }

  public getGetAllPlansUseCase(): GetAllPlansUseCase {
    return this.getAllPlansUseCase;
  }

  public getGetPlansByAgeUseCase(): GetPlansByAgeUseCase {
    return this.getPlansByAgeUseCase;
  }
}
