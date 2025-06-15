import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsCategories } from 'reduxState/services/operations';
import {
  selectUserParams,
  selectBadCategories,
} from 'reduxState/services/selectors';
import { useTranslation } from 'react-i18next';
import { bool } from 'prop-types';
import { List } from './DailyCalorieIntake.styled';
import { CustomizedList } from './FoodListNotEat';
import { BadFoodPlaceholder } from 'components/SideBar';

export const CategoriesList = ({ onMain = true }) => {
  const userParams = useSelector(selectUserParams);
  const categories = useSelector(selectBadCategories);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (!categories.length && userParams && userParams.age !== 0) {
      dispatch(getProductsCategories(userParams));
    }
  }, [dispatch, userParams, categories]);

  if (!categories.length) {
    return <BadFoodPlaceholder>{t('Diet_display')}</BadFoodPlaceholder>;
  }
  return (
    <List>
      {categories.map((item, index) => {
        return (
          <CustomizedList
            key={item[i18n.language]}
            number={index + 1}
            category={item[i18n.language]}
            withNumbers={onMain}
          />
        );
      })}
    </List>
  );
};

CategoriesList.propTypes = {
  onMain: bool,
};
