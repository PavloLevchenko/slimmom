import { useSelector } from 'react-redux';
import { getUserName } from 'reduxState/services/selectors';
import { useDispatch } from 'react-redux';
import { logout } from 'reduxState/services/operations';
import { useAuth } from 'hooks/useAuth';
import {
  List,
  ListItem,
  Arrow,
  LinkToCalc,
  UserInfoWrapper,
  UserName,
  UserExitButton,
} from './UserMenu.styled';

import { useTranslation } from 'react-i18next';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const { userHasData } = useAuth();

  const onLogout = () => {
    dispatch(logout());
  };
  const { t } = useTranslation();
  return (
    <>
      {userHasData && (
        <List>
          <ListItem to="/diary">{t('Diary')}</ListItem>
          <ListItem to="/calculator">{t('Calculator_button')}</ListItem>
        </List>
      )}
      <LinkToCalc to="/calculator">
        <Arrow color="black" size="20px" />
      </LinkToCalc>
      <UserInfoWrapper>
        <UserName>{name}</UserName>
        <UserExitButton type="button" onClick={onLogout}>
          {t('Exit')}
        </UserExitButton>
      </UserInfoWrapper>
    </>
  );
};

export default UserMenu;
