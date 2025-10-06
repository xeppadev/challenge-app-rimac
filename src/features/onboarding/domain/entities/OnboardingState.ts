import { Plan } from './Plan';
import { User } from './User';

export interface OnboardingState {
  currentStep: number;
  user: User;
  selectedPlan?: Plan;
}
