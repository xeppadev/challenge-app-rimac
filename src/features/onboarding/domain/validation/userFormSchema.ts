import * as yup from 'yup';

export const userFormSchema = yup.object({
  documentType: yup
    .string()
    .required('El tipo de documento es obligatorio'),

  documentNumber: yup
    .string()
    .required('El número de documento es obligatorio')
    .matches(/^\d{8}$/, 'El número de documento debe tener 8 dígitos'),

  cellphone: yup
    .string()
    .required('El número de celular es obligatorio')
    .matches(/^\d{9}$/, 'El número de celular debe tener 9 dígitos'),

  acceptPrivacyPolicy: yup
    .boolean()
    .required('Debes aceptar la Política de Privacidad')
    .oneOf([true], 'Debe aceptar la Política de Privacidad'),

  acceptCommercialCommunications: yup
    .boolean()
    .required('Debes aceptar la Política de Comunicaciones Comerciales')
    .oneOf([true], 'Debe aceptar la Política de Comunicaciones Comerciales'),
});

export type UserFormData = yup.InferType<typeof userFormSchema>;
