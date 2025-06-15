import { Wrapper, Link } from './Footer.styled';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Link to={'privacy-policy'}>{t('PrivacyPolicy')}</Link>
    </Wrapper>
  );
}
