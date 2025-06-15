import { useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en-gb';
import 'dayjs/locale/de';
import 'dayjs/locale/uk';
import dayjs from 'dayjs';
import 'react-datetime/css/react-datetime.css';
import { DiaryDate } from './DiaryDateCalendar.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllDiaryProduct,
  setDiaryDay,
} from 'reduxState/services/operations';
import { selectIsRefreshing, getDiaryDay } from 'reduxState/services/selectors';
import { useTranslation } from 'react-i18next';
import { DiaryDatePicker } from './DiaryDatePicker';

export const DiaryDateCalendar = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const handleChange = newValue => {
    const date = dayjs(newValue).format();
    dispatch(setDiaryDay(date));
  };
  const day = useSelector(getDiaryDay);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    if (!isRefreshing) {
      dispatch(getAllDiaryProduct(day));
    }
  }, [dispatch, day, isRefreshing]);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale={i18n.language}
    >
      <DiaryDate>
        <DiaryDatePicker day={dayjs(day)} handleChange={handleChange} />
      </DiaryDate>
    </LocalizationProvider>
  );
};
