import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.footer`
  display: flex;
  align-items: end;
  justify-content: end;
  @media screen and (min-width: 1280px) {
    justify-content: start;
  }
`;
export const Link = styled(NavLink)`
  color: ${prop => prop.theme.palette.primary.light};
  text-decoration: none;
  :hover {
    color: ${prop => prop.theme.palette.primary.main};
  }
`;
