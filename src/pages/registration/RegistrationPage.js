import RegisterForm from 'components/RegistrationForm/RegistrationForm';
import { Helmet } from 'react-helmet-async';
import { Title, Wrapper } from './RegistrationPage.styled';
import Container from 'components/Container';
import { useTranslation } from 'react-i18next';

export default function RegistrationPage() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Helmet>
        <title>{t('Register')}</title>
      </Helmet>
      <Container>
        <Title>{t('Register')}</Title>
        <RegisterForm />
      </Container>
    </Wrapper>
  );
}
