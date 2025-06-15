import { func, string, number, shape, oneOfType } from 'prop-types';
import { LinkButton } from 'components/Button/Button';
import {
  IntakeBar,
  IntakeResult,
  IntakeTitle,
  ListTitle,
  ListWrapper,
  TitleWrapper,
  CloseButton,
  ButtonStart,
} from './DailyCalorieIntake.styled';
import { calculateCalories } from 'utils';
import { CategoriesList } from './CategoriesList';

import { useTranslation } from 'react-i18next';

const DailyCalorieIntake = ({ closeModal, params }) => {
  const { t } = useTranslation();

  return (
    <>
      <IntakeBar>
        <CloseButton onClick={closeModal}></CloseButton>
      </IntakeBar>
      <TitleWrapper>
        <IntakeTitle>{t('Daily_calorie')}</IntakeTitle>
        <IntakeResult>
          {calculateCalories(params)} {t('kcal')}
        </IntakeResult>
      </TitleWrapper>
      <ListWrapper>
        <ListTitle>{t('Food_list')}</ListTitle>
        <CategoriesList />
      </ListWrapper>
      <ButtonStart type="button">
        <LinkButton to={'/signup'}>{t('Start_loosing')}</LinkButton>
      </ButtonStart>
    </>
  );
};

export default DailyCalorieIntake;

DailyCalorieIntake.propTypes = {
  closeModal: func.isRequired,
  params: shape({
    height: oneOfType([string, number]).isRequired,
    age: oneOfType([string, number]).isRequired,
    currentWeight: oneOfType([string, number]).isRequired,
    desiredWeight: oneOfType([string, number]).isRequired,
  }),
};
