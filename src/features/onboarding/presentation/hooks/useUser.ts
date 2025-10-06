import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { DependencyProvider } from '../../../../shared/infrastructure/di/DependencyProvider';
import { User } from '../../domain/entities/User';

const dependencyProvider = DependencyProvider.getInstance();

export const useUser = () => {
  const getCurrentUserUseCase = dependencyProvider.getGetCurrentUserUseCase();

  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const user = await getCurrentUserUseCase.execute();
      console.log('🚀 user-useUser', user);
      return user;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const updateUserUseCase = dependencyProvider.getUpdateUserUseCase();

  return useMutation({
    mutationFn: (user: User) => updateUserUseCase.execute(user),
    onSuccess: () => {
      // Invalidate and refetch user data
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};
