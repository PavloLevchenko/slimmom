import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Loader from '../Loader';
import {
  SideBarContainer,
  BadFoodContainer,
  SummaryTitle,
} from './SideBar.styled';
import { SummaryList } from './SummaryList';
import { useTranslation } from 'react-i18next';
import { CategoriesList } from 'components/DailyCalorieIntake/categoriesList';
import { getDiaryDay, getIsLoading } from 'redux/services/selectors';

export const SideBar = () => {
  const { t } = useTranslation();
  const day = useSelector(getDiaryDay);

  const isLoading = useSelector(getIsLoading);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <SideBarContainer>
        <Box sx={{ maxWidth: 450 }}>
          <SummaryTitle>
            {t('Summary_for')} {day.substring(0, 10)}
          </SummaryTitle>
          <SummaryList />
        </Box>
        <BadFoodContainer>
          <SummaryTitle>{t('Food_not_recommended')}</SummaryTitle>
          <CategoriesList onMain={false} />
        </BadFoodContainer>
      </SideBarContainer>
    </>
  );
};
