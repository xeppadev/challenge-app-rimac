import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { UserFormData, userFormSchema } from '@/features/onboarding/domain/validation/userFormSchema';
import { useFormStore } from '@/features/onboarding/presentation/store/useFormStore';

export const useUserForm = () => {
  const { setFormData } = useFormStore();

  const form = useForm<UserFormData>({
    resolver: yupResolver(userFormSchema),
    defaultValues: {
      documentType: 'DNI',
      documentNumber: '',
      cellphone: '',
      acceptPrivacyPolicy: false,
      acceptCommercialCommunications: false,
    },
    mode: 'onChange',
  });

  const onSubmit = (data: UserFormData) => {
    console.log('Form data:', data);
    setFormData(data);
    return data;
  };

  return {
    form,
    onSubmit,
  };
};
