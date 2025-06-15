import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FcDatabase, FcImport } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import {
  BurgerButton,
  BurgerMenu,
  NavDiaryLink,
  NavCalcLink,
  AuthLink,
  ButtonWrapper,
} from './Burger.styled';
import LangSwitcher from '../LangSwitcher';
import { useAuth } from 'hooks/useAuth';
import { useTranslation } from 'react-i18next';

const Burger = () => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  const { t } = useTranslation();
  const theme = useSelector(state => state.theme.darkTheme);
  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <>
      <ButtonWrapper>
        <LangSwitcher />
        {!theme ? (
          <BurgerButton
            className={isBurgerMenuOpen ? 'active' : ''}
            aria-label="burger menu"
            onClick={toggleBurgerMenu}
          >
            {isBurgerMenuOpen ? (
              <GrClose size={20} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </BurgerButton>
        ) : (
          <BurgerButton
            className={isBurgerMenuOpen ? 'active' : ''}
            aria-label="burger menu"
            onClick={toggleBurgerMenu}
          >
            {isBurgerMenuOpen ? (
              <FcImport size={20} />
            ) : (
              <FcDatabase size={24} />
            )}
          </BurgerButton>
        )}
      </ButtonWrapper>
      <BurgerMenu className={isBurgerMenuOpen ? 'open' : ''}>
        {isLoggedIn ? (
          <>
            <NavDiaryLink to="/diary" onClick={toggleBurgerMenu}>
              {t('Diary')}
            </NavDiaryLink>
            <NavCalcLink to="calculator" onClick={toggleBurgerMenu}>
              {t('Calculator_button')}
            </NavCalcLink>
          </>
        ) : (
          <>
            <AuthLink to="login" onClick={toggleBurgerMenu}>
              {t('Sign_in')}
            </AuthLink>
            <AuthLink to="signup" onClick={toggleBurgerMenu}>
              {t('Registration')}
            </AuthLink>
          </>
        )}
      </BurgerMenu>
    </>
  );
};

export default Burger;
