import styled from 'styled-components';
import { Autocomplete, TextField } from '@mui/material';

export const Form = styled.form`
  /* position: relative; */
  width: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px auto 0px;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 80px 20px;
    width: 503px;
    padding: 0px;
    margin: 0px;
    margin-bottom: 60px;
  }
`;
export const Complete = styled(Autocomplete)`
  /* margin-right: 22px; */
  width: 280px;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    width: 240px;
    margin-right: 22px;
    margin-bottom: 0px;
  }
  & .MuiInputLabel-outlined:not(.MuiInputLabel-shrink) {
    // Default transform is "translate(14px, 20px) scale(1)""
    // This lines up the label with the initial cursor position in the input
    // after changing its padding-left.
    transform: 'translate(34px, 20px) scale(1);';
  }
  &.Mui-focused .MuiInputLabel-outlined {
    color: 'purple';
  }
  & .MuiAutocomplete-inputRoot {
    color: 'purple';

    & .MuiOutlinedInput-notchedOutline {
      height: 53px;
      border: none;
      border-radius: 0px;
      border-bottom: 1px solid;
    }
    &:hover .MuiOutlinedInput-notchedOutline {
      /* border-color: orange; */
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      /* border-color: orange; */
    }
  }
`;

export const ProductInput = styled(TextField)`
  font-size: 16px;
  outline: none;
  width: 240px;
  height: 37px;
  border: none;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  margin-right: 22px;
  @media (max-width: 767px) {
    margin-bottom: 40px;
    margin-right: 0;
    width: 100%;
  }
`;

export const GramsInput = styled(TextField)`
  font-size: 16px;
  outline: none;
  height: 37px;
  width: 280px;
  border: none;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  margin-right: 87px;
  :placeholder {
    text-align: right;
  }
  @media (min-width: 768px) {
    width: 106px;
    margin-bottom: 0px;
  }

  /* @media (min-width: 1200px) {
    margin-right: 60px;
  } */

  /* @media (max-width: 768px) {
    margin-right: 30px;
  } */
  /* 
  @media (max-width: 480px) {
    margin-bottom: 70px;
    width: 100%;
    margin-right: 0;
  } */
`;
