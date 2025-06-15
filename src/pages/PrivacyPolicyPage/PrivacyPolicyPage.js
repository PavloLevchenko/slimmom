import { useLocation } from 'react-router-dom';
import { ButtonSecondary } from 'components/Button/Button';
import { Box } from 'components/Box';
import { useTranslation } from 'react-i18next';
import {
  Wrapper,
  StyledLink,
  Title,
  PrivacyPolicyText,
  PrivacyLink,
} from './PrivacyPolicyPage.styled';
import Container from 'components/Container';

const EMAIL_FOR_QUESTIONS = process.env.REACT_APP_EMAIL_FOR_QUESTIONS;

const PrivacyPolicyPage = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const { t } = useTranslation();

  return (
    <Box as="main">
      <Container>
        <Wrapper>
          <Title>{t('PrivacyPolicy')}</Title>
          <PrivacyPolicyText>
            {t('PrivacyPolicyText')}
            <PrivacyLink href={`mailto:${EMAIL_FOR_QUESTIONS}`}>
              {EMAIL_FOR_QUESTIONS}
            </PrivacyLink>
          </PrivacyPolicyText>
          <StyledLink to={backLink}>
            <ButtonSecondary style={{ margin: 0 }}>
              {t('Back_home')}
            </ButtonSecondary>
          </StyledLink>
        </Wrapper>
      </Container>
    </Box>
  );
};

export default PrivacyPolicyPage;
