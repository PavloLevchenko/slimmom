import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const CookieConsentBanner = styled.div(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  padding: '15px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 1000,
  boxShadow: theme.shadows[8],
}));

export const ConsentText = styled.p(({ theme }) => ({
  margin: 0,
  fontSize: 14,
  color: theme.palette.text.secondary,
}));

export const PrivacyLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.primary.light,
  textDecoration: 'underline',
  marginLeft: 5,
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export const AcceptButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  color: theme.palette.getContrastText(theme.palette.success.main),
  border: 'none',
  padding: '8px 15px',
  cursor: 'pointer',
  borderRadius: 5,
  fontSize: 14,
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.success.dark,
  },
}));
