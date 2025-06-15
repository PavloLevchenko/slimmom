import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AddForm from '../AddForm/AddForm';

import { AddBackdrop, MobileModalClose } from './DiaryModal.styled';

const DiaryModal = ({ onModal }) => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (onModal) {
      setOpen(true);
    }
  }, [onModal]);

  return (
    <AddBackdrop open={open}>
      <AddForm onModal={onModal}></AddForm>
      <MobileModalClose
        onClick={() => setOpen(onModal())}
        variant="contained"
        type="button"
      >
        {t('Back')}
      </MobileModalClose>
    </AddBackdrop>
  );
};

export default DiaryModal;
