import { useSelector, useDispatch } from 'react-redux';
import { selectConsentStatus } from 'reduxState/services/selectors';
import { setCookieConsent } from 'reduxState/services/operations';
import { useTranslation } from 'react-i18next';
import {
  CookieConsentBanner,
  ConsentText,
  AcceptButton,
  PrivacyLink,
} from './CookieConsent.styled';

const CookieConsent = () => {
  const dispatch = useDispatch();
  const hasConsent = useSelector(selectConsentStatus);

  const { t } = useTranslation();

  const handleAccept = () => {
    dispatch(setCookieConsent(true));
  };

  if (hasConsent) {
    return null;
  }

  return (
    <CookieConsentBanner>
      <ConsentText>
        {t('Consent_text')}
        <PrivacyLink to={'privacy-policy'}>{t('More_info')}</PrivacyLink>.
      </ConsentText>
      <AcceptButton onClick={handleAccept}>{t('Ok')}</AcceptButton>
    </CookieConsentBanner>
  );
};

export default CookieConsent;
