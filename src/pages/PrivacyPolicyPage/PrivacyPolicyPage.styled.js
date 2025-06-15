import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { Link } from '@mui/material';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

export const Title = styled.h2`
  justify-content: center;
  align-items: center;
  margin-bottom: ${prop => prop.theme.space[5]}px;
  font-size: 26px;
  z-index: 1;
`;

export const PrivacyPolicyText = styled.div`
  margin-bottom: ${prop => prop.theme.space[6]}px;
  font-family: Verdana;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  text-align: center;
  z-index: 1;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    margin-bottom: ${prop => prop.theme.space[6]}px;
  }
`;

export const StyledLink = styled(NavLink)`
  margin: 0;
  text-decoration: none;
`;

export const PrivacyLink = styled(Link)`
  margin-left: 5px;
  color: #87ceeb;
  text-decoration: none;
`;
