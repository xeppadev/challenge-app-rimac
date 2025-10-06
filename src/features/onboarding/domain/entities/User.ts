import { BaseEntity } from '../../../../shared/domain/entities/BaseEntity';

/**
 * User entity that represents a user in the application domain
 */
export interface User extends BaseEntity {
  name: string;
  lastName: string;
  birthDay: string;
  phone: string;
  document: {
    type: string;
    number: string;
  };
  // Additional fields for the form
  documentType: string;
  documentNumber: string;
  cellphone: string;
  acceptPrivacyPolicy: boolean;
  acceptCommercialCommunications: boolean;
}
