import { useState, useEffect } from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import 'react-datetime/css/react-datetime.css';
import {
  textFieldInputStyle,
  textPickerStyle,
} from './DiaryDateCalendar.styled';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useTranslation } from 'react-i18next';

export const DiaryDatePicker = ({ day, handleChange }) => {
  const { t } = useTranslation();
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setValue(day);
  }, [day]);

  return (
    <DesktopDatePicker
      format={t('Date_format')}
      disableMaskedInput
      closeOnSelect={true}
      value={value}
      components={{ OpenPickerIcon: DateRangeIcon }}
      onChange={newValue => {
        handleChange(newValue);
      }}
      open={open}
      onClose={handleClose}
      slotProps={{
        openPickerButton: {
          onClick: handleClick,
          sx: theme => ({ ...textPickerStyle(theme) }),
        },
        textField: {
          onClick: handleClick,
          InputProps: {
            readOnly: true,
            sx: theme => ({ ...textFieldInputStyle(theme) }),
            disableUnderline: true,
          },
          variant: 'standard',
        },
      }}
    />
  );
};
