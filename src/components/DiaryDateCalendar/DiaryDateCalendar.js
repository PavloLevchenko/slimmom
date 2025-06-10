import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en-gb';
import 'dayjs/locale/de';
import 'dayjs/locale/uk';
import dayjs from 'dayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import 'react-datetime/css/react-datetime.css';
import { DiaryDate, Outline } from './DiaryDateCalendar.styled';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDiaryProduct, setDiaryDay } from 'redux/services/operations';
import { selectIsRefreshing, getDiaryDay } from 'redux/services/selectors';
import { useTranslation } from 'react-i18next';

export const DiaryDateCalendar = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const handleChange = newValue => {
    const date = dayjs(newValue).format();

    dispatch(setDiaryDay(date));
    dispatch(getAllDiaryProduct(date));
  };
  const day = useSelector(getDiaryDay);
  const isRefreshing = useSelector(selectIsRefreshing);

  React.useEffect(() => {
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
        <DesktopDatePicker
          inputFormat="MMM DD YYYY"
          disableMaskedInput
          closeOnSelect={true}
          value={day}
          components={{ OpenPickerIcon: DateRangeIcon }}
          onChange={handleChange}
          renderInput={params => <Outline {...params} />}
        />
      </DiaryDate>
    </LocalizationProvider>
  );
};
