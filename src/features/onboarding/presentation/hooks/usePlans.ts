import { useQuery } from '@tanstack/react-query';
import { DependencyProvider } from '../../../../shared/infrastructure/di/DependencyProvider';

const dependencyProvider = DependencyProvider.getInstance();

export const usePlans = () => {
  const getAllPlansUseCase = dependencyProvider.getGetAllPlansUseCase();

  return useQuery({
    queryKey: ['plans'],
    queryFn: async () => {
      const plans = await getAllPlansUseCase.execute();
      console.log('🚀 plans-usePlans', plans);
      return plans;
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 3,
  });
};

export const usePlansByAge = (age: number) => {
  const getPlansByAgeUseCase = dependencyProvider.getGetPlansByAgeUseCase();

  return useQuery({
    queryKey: ['plans', 'age', age],
    queryFn: () => getPlansByAgeUseCase.execute(age),
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 3,
    enabled: age > 0, // Only run query if age is provided
  });
};
