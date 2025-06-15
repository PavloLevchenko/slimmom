import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Link = styled(NavLink)`
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: GothamPro-Bold;
  font-size: 14px;
  font-weight: 700;
  line-height: 0.93;
  letter-spacing: 0.04em;
  text-decoration: none;
  text-transform: uppercase;
  color: ${prop => prop.theme.palette.text.secondary};

  &:last-child {
    margin-left: ${prop => prop.theme.space[4]}px;
  }

  &:hover,
  &:focus {
    color: ${prop => prop.theme.palette.primary.main};
  }

  &.active {
    color: ${prop => prop.theme.palette.text.primary};
  }

  @media screen and (max-width: 349.5px) {
    font-size: 12px;

    &:last-child {
      margin-left: 10px;
    }
  }
`;
