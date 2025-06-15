import { LangButton, ButtonContainer, Flag } from './LangSwitcher.styled';
import React from 'react';
import i18n from 'translations/i18n';
import { GB, DE, UA } from 'country-flag-icons/react/3x2';

const LangSwitcher = () => {
  const handleOnclick = e => {
    e.preventDefault();
    i18n.changeLanguage(e.currentTarget.value);
  };

  return (
    <ButtonContainer>
      <LangButton value="en" onClick={handleOnclick}>
        <Flag as={GB} />
      </LangButton>
      <LangButton value="de" onClick={handleOnclick}>
        <Flag as={DE} />
      </LangButton>
      <LangButton value="uk" onClick={handleOnclick}>
        <Flag as={UA} />
      </LangButton>
    </ButtonContainer>
  );
};

export default LangSwitcher;
