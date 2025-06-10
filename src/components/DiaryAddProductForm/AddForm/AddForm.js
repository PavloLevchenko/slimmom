import { HiPlus } from 'react-icons/hi';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { AddProductBtn } from 'components/Button/Button';
import Loader from '../../Loader';
import { Form, ProductInput, GramsInput, Complete } from './AddForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addDiaryProduct, getNameProducts } from 'redux/services/operations';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  getProductTitle,
  selectUserParams,
  getIsLoading,
} from 'redux/services/selectors';

const AddForm = ({ onModal }) => {
  const dispatch = useDispatch();
  const date = new Date().toISOString();
  const [productName, setProductName] = useState(null);
  const [product, setProduct] = useState('');

  const dataTitle = useSelector(getProductTitle);
  const userParams = useSelector(selectUserParams);
  const isLoading = useSelector(getIsLoading);

  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: { weight: '' },
    validationSchema: Yup.object().shape({
      weight: Yup.number().min(2),
    }),
    onSubmit: ({ weight }, { resetForm }) => {
      if (productName === null) {
        toast.info(t('Enter_product_name'));
        return;
      }
      if (weight === '') {
        toast.info(t('Enter_product_weight'));
        return;
      }
      const data = {
        dataTitle,
        productName,
        product,
        weight,
        date,
      };
      dispatch(addDiaryProduct(data));
      resetForm();
      setProduct(' ');
      setProductName(null);
      onModal && onModal();
    },
  });
  const onInputChange = (e, v) => {
    if (v.length >= 2) {
      dispatch(getNameProducts(v));
    }
    if (v.length === 0) {
      setProductName(null);
      setProduct('');
    }
  };
  const handleChange = (e, value) => {
    setProduct(value.id);
    setProductName(value.label);
  };
  const nameProd = dataTitle.map(e => {
    const bloodTypes = e.groupBloodNotAllowed.flatMap((type, i) =>
      type === true ? i : []
    );
    const badProduct = bloodTypes.includes(userParams.bloodType);
    return {
      label: e.title.ua,
      id: e._id,
      color: badProduct ? 'rgba(200, 0, 0, 0.1)' : 'rgba(224, 224, 224, 0.1)',
    };
  });
  const { values, errors, touched, handleSubmit } = formik;

  return (
    <Form onSubmit={handleSubmit}>
      <Complete
        onInputChange={onInputChange}
        onChange={handleChange}
        disableClearable
        isOptionEqualToValue={(option, value) => {
          return option.label === value;
        }}
        value={productName}
        renderOption={(props, option) => (
          <li {...props}>
            <span style={{ backgroundColor: option.color }}>
              {option.label}
            </span>
          </li>
        )}
        noOptionsText={t('Enter_product_name')}
        options={nameProd}
        renderInput={params => (
          <ProductInput
            {...params}
            label={t('Enter_product_name')}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
      <GramsInput
        id="weight"
        name="weight"
        label={t('Grams')}
        type={'number'}
        variant="standard"
        InputProps={{ inputProps: { min: 5, max: 500 } }}
        onChange={formik.handleChange}
        value={values.weight}
        error={Boolean(touched.weight && errors.weight)}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <AddProductBtn type="submit" aria-label="Add product">
          <HiPlus />
        </AddProductBtn>
      )}
    </Form>
  );
};

export default AddForm;

AddForm.propTypes = { onModal: PropTypes.func };
