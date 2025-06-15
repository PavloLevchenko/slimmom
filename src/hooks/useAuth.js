import { useSelector } from 'react-redux';
import {
  getGlobalUserData,
  getIsLoggedIn,
  selectIsRefreshing,
} from 'reduxState/services/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(getGlobalUserData);
  const userHasData = Boolean(user && user.bloodType);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    userHasData,
  };
};
