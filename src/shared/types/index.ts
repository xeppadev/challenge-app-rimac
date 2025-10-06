import { Plan } from '../../features/onboarding/domain/entities/Plan';
import { User } from '../../features/onboarding/domain/entities/User';

// Re-export domain entities for backward compatibility
export type { Plan } from '../../features/onboarding/domain/entities/Plan';
export type { User } from '../../features/onboarding/domain/entities/User';


export type RootStackParamList = {
  Home: undefined;
  Plans: undefined;
  Resume: { plan: Plan; user: User };
};

export interface ApiResponse<T> {
  data: T;
  message?: string;
}
