import * as yup from 'yup';
import translate from '@translations/i18n';

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .email(translate('resources:email_validate'))
      .required(translate('resources:email_required')),
    password: yup
      .string()
      .min(6, translate('resources:password_validate'))
      .required(translate('resources:password_required')),
  })
  .required();

export const registerSchema = yup
  .object({
    fullName: yup.string().required(translate('resources:fullName_required')),
    email: yup.string().required(translate('resources:email_required')),
    password: yup
      .string()
      .min(6, translate('resources:password_validate'))
      .required(translate('resources:password_required')),
    rePassword: yup
      .string()
      .min(6, translate('resources:re_password_validate'))
      .required(translate('resources:re_password_required')),
  })
  .required();
