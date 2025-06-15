import { Backdrop } from '@mui/material';
import { DiaryModalList } from 'components/DiaryModalList/DiaryModalList';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
  DeleteButton,
  IconCross,
  List,
  ListItems,
  DataProduct,
  NameProduct,
  Kcal,
  Weight,
  Box,
  ProductCheckbox,
  ProductCheckboxGroup,
} from './DiaryProductsListItem.styled';
import { useSelector } from 'react-redux';
import {
  getAllDiaryProduct,
  getAllGroupDiaryProduct,
  getIsLoading,
} from 'reduxState/services/selectors';

export default function DiaryProductsListItem() {
  const notes = useSelector(getAllDiaryProduct);
  const notesGroup = useSelector(getAllGroupDiaryProduct);
  const isLoading = useSelector(getIsLoading);
  const [open, setOpen] = useState(false);
  const [idProduct, setIdProduct] = useState();
  const [group, setGrouped] = useState(false);
  const dailyProducts = group ? notesGroup : notes;

  const handleClose = () => {
    setOpen(false);
  };
  const { t, i18n } = useTranslation();

  const handleToggle = id => {
    setOpen(!open);
    setIdProduct(id);
  };

  return (
    <Box>
      <ProductCheckboxGroup>
        <FormControlLabel
          control={
            <ProductCheckbox
              checked={group}
              onChange={() => setGrouped(!group)}
            />
          }
          label={t('GroupProducts')}
        />
      </ProductCheckboxGroup>
      <List disabled={isLoading}>
        {dailyProducts.map((e, i, ar) => {
          return (
            <ListItems key={e._id}>
              <NameProduct noWrap>{e.product.title[i18n.language]}</NameProduct>
              <DataProduct>
                <Weight noWrap>
                  {e.weight} {t('g')}
                </Weight>
                <Kcal noWrap>
                  {Math.round(
                    (e.product.calories / e.product.weight) * e.weight
                  )}{' '}
                  {t('kcal')}
                </Kcal>
              </DataProduct>
              {!group && (
                <DeleteButton
                  type="button"
                  onClick={() => {
                    handleToggle(e._id);
                  }}
                >
                  <IconCross />
                </DeleteButton>
              )}
            </ListItems>
          );
        })}
        <Backdrop
          sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <DiaryModalList id={idProduct} />
        </Backdrop>
      </List>
    </Box>
  );
}
