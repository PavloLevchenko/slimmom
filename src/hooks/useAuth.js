import { useSelector } from 'react-redux';
import {
  getUserData,
  getIsLoggedIn,
  selectIsRefreshing,
} from 'redux/services/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(getUserData);
  const userHasData = Boolean(user && user.bloodType && user.weight);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    userHasData,
  };
};
