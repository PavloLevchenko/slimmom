import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const DiaryDate = styled.div`
  margin: 40px auto 32px auto;
  width: 160px;
  font-family: Verdana;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  place-items: center start;
  color: ${prop => prop.theme.palette.common.black};
  border: none;

  @media screen and (min-width: 768px) {
    width: 260px;
    margin: 0;
    margin-bottom: 60px;
    margin-top: 100px;
    font-size: 34px;
    line-height: 41px;
  }
`;

export const textFieldInputStyle = theme => css`
  font-family: 'Verdana';
  font-style: 'normal';
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  &::selection {
    background-color: transparent;
    color: inherit;
  }

  &:hover {
    background-color: ${theme.palette.background.hover};
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    font-size: 34px;
    line-height: 41px;
  }
`;

export const textPickerStyle = theme => css`
  color: ${theme.palette.primary.main};

  &:hover {
    fill: ${theme.palette.primary.main};
    background-color: transparent;
  }
`;
