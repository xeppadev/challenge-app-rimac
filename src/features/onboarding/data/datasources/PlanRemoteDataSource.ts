import { API_ROUTES } from '../../../../shared/constants';
import { ApiError } from '../../../../shared/infrastructure/api/ApiError';
import { ApiClient } from '../../../../shared/infrastructure/api/client';
import { PlanModel, PlansApiResponse } from '../models/PlanModel';

/**
 * Remote data source for plan operations
 */
export class PlanRemoteDataSource {
  private apiClient: ApiClient;

  constructor() {
    this.apiClient = ApiClient.getInstance();
  }

  /**
   * Get all plans from API
   * @returns Promise with array of plan models
   * @throws ApiError if the request fails
   */
  async getAllPlans(): Promise<PlanModel[]> {
    const result = await this.apiClient.get<PlansApiResponse>(API_ROUTES.PLANS);
    console.log('🚀 result-PlanRemoteDataSource', result.data);

    if (!result.success || !result.data) {
      throw result.error || new ApiError('Failed to fetch plans from API');
    }

    return result.data.list;
  }
}
