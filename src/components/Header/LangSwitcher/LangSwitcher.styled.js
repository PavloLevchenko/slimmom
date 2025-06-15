import styled from '@emotion/styled';

export const LangButton = styled.button`
  cursor: pointer;
  width: 20px;
  height: 20px;
  border: none;
  padding: 0;
  margin-right: 5px;
  background-color: transparent;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  @media screen and (max-width: 767.5px) {
    padding-top: 2px;
    margin-right: 15px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 10px;
  }
`;

export const Flag = styled.svg`
  width: 20px;
  height: 20px;
`;
