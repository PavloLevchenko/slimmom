import * as Yup from 'yup';
import i18n from '../translations/i18n';

export const userParamsSchema = Yup.object({
  height: Yup.number()
    .positive()
    .typeError(i18n.t('Height_must_be_a_number'))
    .integer()
    .min(100, i18n.t('Too_little'))
    .max(250, i18n.t('Too_much'))
    .required(i18n.t('Enter_height')),
  age: Yup.number()
    .positive()
    .typeError(i18n.t('Age_must_be_a_number'))
    .integer()
    .min(5, i18n.t('Too_little'))
    .max(100, i18n.t('Too_much'))
    .required(i18n.t('Enter_age')),
  currentWeight: Yup.number()
    .typeError(i18n.t('Сurrent_weight_must_be_a_number'))
    .positive()
    .integer()
    .min(20, i18n.t('Too_little'))
    .max(500, i18n.t('Too_much'))
    .required(i18n.t('Enter_current_weight')),
  desiredWeight: Yup.number()
    .typeError(i18n.t('Desired_weight_must_be_a_number'))
    .positive()
    .integer()
    .min(20, i18n.t('Too_little'))
    .max(500, i18n.t('Too_much'))
    .required(i18n.t('Enter_desired_weight')),
  bloodType: Yup.string().required(i18n.t('Choose_your_blood_type')),
});

export const userRegisterSchema = Yup.object({
  name: Yup.string().required(i18n.t('Enter_name')),
  email: Yup.string()
    .typeError(i18n.t('Email_must_be_valid'))
    .email()
    .required(i18n.t('Enter_email')),
  password: Yup.string()
    .typeError(i18n.t('Password_lange'))
    .min(6, i18n.t('Too_little'))
    .max(16, i18n.t('Too_much'))
    .required(i18n.t('Enter_password')),
});

export const userLoginSchema = Yup.object({
  email: Yup.string()
    .typeError(i18n.t('Email_must_be_valid'))
    .email()
    .required(i18n.t('Enter_email')),
  password: Yup.string()
    .typeError(i18n.t('Password_lange'))
    .min(6, i18n.t('Too_little'))
    .max(16, i18n.t('Too_much'))
    .required(i18n.t('Enter_password')),
});
