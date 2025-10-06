import { create } from 'zustand';
import { StateCreator } from 'zustand/vanilla';
import { UserFormData } from '../../domain/validation/userFormSchema';

interface FormState {
  formData: Partial<UserFormData>;
  setFormData: (data: Partial<UserFormData>) => void;
  updateFormField: (field: keyof UserFormData, value: unknown) => void;
  resetForm: () => void;
}

const createFormStore: StateCreator<FormState> = (set) => ({
  formData: {},
  setFormData: (data: Partial<UserFormData>) => set({ formData: data }),
  updateFormField: (field: keyof UserFormData, value: unknown) =>
    set((state: FormState) => ({
      formData: {
        ...state.formData,
        [field]: value,
      },
    })),
  resetForm: () => set({ formData: {} }),
});

export const useFormStore = create<FormState>(createFormStore);
