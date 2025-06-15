import styled from '@emotion/styled';
import { Backdrop, Button } from '@mui/material';

export const AddBackdrop = styled(Backdrop)`
  position: absolute;
  z-index: 1;
  background: ${prop => prop.theme.palette.background.paper};
  top: 84px;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Btn = styled(Button)`
  align-self: center;
  width: 176px;
  height: 44px;
  border-radius: 7px;
  border: none;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${prop => prop.theme.palette.common.white};
`;

export const MobileModalClose = styled(Btn)`
  position: absolute;
  top: 84px;
  right: 40px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
