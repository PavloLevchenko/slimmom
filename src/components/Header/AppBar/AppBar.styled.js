import { keyframes } from 'styled-components';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo/logo.png';
import logoDesk from '../../../images/logo/logoDesk.png';
import { ReactComponent as slim } from '../../../images/logo/logoSlim.svg';
import { ReactComponent as mom } from '../../../images/logo/logoMom.svg';
import { zoomIn } from 'react-animations';

const zoomAnimation = keyframes`${zoomIn}`;

export const Header = styled.header`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  border-bottom: 2px solid;
  border-color: ${prop => prop.theme.palette.input.primary};

  @media screen and (min-width: 1280px) {
    border-bottom: none;
    align-items: baseline;
  }
`;

export const NavHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 16px 20px;

  @media screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
    padding-left: ${prop => prop.theme.space[5]}px;
    padding-right: ${prop => prop.theme.space[5]}px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: ${prop => prop.theme.space[4]}px;
    padding-right: ${prop => prop.theme.space[4]}px;
    justify-content: flex-start;
    align-items: baseline;
    padding-top: 80px;
    padding-bottom: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${prop => prop.theme.space[5]}px;
  margin-bottom: ${prop => prop.theme.space[3]}px;
  @media screen and (min-width: 1280px) {
    left: ${prop => prop.theme.spaceForm[3]}px;
    ::after {
      content: '';
      display: block;
      margin-left: ${prop => prop.theme.space[5]}px;
      height: ${prop => prop.theme.space[5]}px;
      width: ${prop => prop.theme.space[1]}px;
      background-color: ${prop => prop.theme.palette.input.primary};
    }
  }
`;

export const LoggedWrapper = styled(Wrapper)``;

export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: baseline;

  @media only screen and (min-width: 1280px) {
    margin-right: ${prop => prop.theme.space[3]}px;
  }
`;

export const Navigation = styled.div`
  display: flex;
  z-index: 3;
  @media only screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const Logo = styled.div`
  animation: 3s ${zoomAnimation};
  width: 46.67px;
  height: 44px;
  background-image: url(${logo});
  background-size: cover;

  @media screen and (min-width: 1280px) {
    height: 66px;
    width: 70.25px;
    background-image: url(${logoDesk});
  }
`;

export const LogoSlim = styled(slim)`
  margin-top: 10px;
  fill: ${prop => prop.theme.palette.text.primary};
  @media screen and (min-width: 1280px) {
    filter: drop-shadow(0 5px 1px ${prop => prop.theme.palette.text.secondary});
  }
`;

export const LogoMom = styled(mom)`
  fill: #fc842d;
`;

export const UserMenuWrapperDesk = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 0;
  }
`;

export const UserMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: ${prop => prop.theme.spaceForm[1]}px;
  padding-left: ${prop => prop.theme.spaceForm[1]}px;
  background-color: ${prop => prop.theme.palette.userInfo.primary};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const AuthMenu = styled.div`
  @media screen and (max-width: 767.5px) {
    display: none;
  }
  display: flex;
  align-items: center;
`;

export const BurgerWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  align-items: baseline;
`;
