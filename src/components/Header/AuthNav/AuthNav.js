import { Link } from './AuthNav.styled';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LangSwitcher from '../LangSwitcher';

const AuthNav = () => {
  const { t } = useTranslation();

  return (
    <>
      <LangSwitcher />
      <Link to="/login">{t('Sign_in')}</Link>
      <Link to="/signup">{t('Registration')}</Link>
    </>
  );
};

export default AuthNav;
