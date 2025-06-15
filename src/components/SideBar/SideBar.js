import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import dayjs from 'dayjs';
import {
  SideBarContainer,
  BadFoodContainer,
  SummaryTitle,
} from './SideBar.styled';
import { SummaryList } from './SummaryList';
import { useTranslation } from 'react-i18next';
import { CategoriesList } from 'components/DailyCalorieIntake/CategoriesList';
import { getDiaryDay } from 'reduxState/services/selectors';

export const SideBar = () => {
  const { t } = useTranslation();
  const day = useSelector(getDiaryDay);

  return (
    <>
      <SideBarContainer>
        <Box sx={{ maxWidth: 450 }}>
          <SummaryTitle>
            {t('Summary_for')} {dayjs(day).format(t('Date_format'))}
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
