import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userFormSchema, UserFormData } from '@/features/onboarding/domain/validation/userFormSchema';
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
