import { useContext, useState } from 'react';
import { ThemeContext } from 'theme/ThemeContext';
import Icon from '../Icon/Icon';
import * as Styled from './SearchInput.styled';

const SearchInput = ({ placeholder }: { placeholder: string }) => {
  const [hasFocus, setFocus] = useState(false);
  const { palette } = useContext(ThemeContext);

  return (
    <Styled.InputContainer outlineColor={palette.primaryDark}>
      <Styled.IconWrapper>
        <Icon
          name='search'
          size={16}
          color={hasFocus ? 'primaryDark' : 'greyDark'}
          isActive={false}
        />
      </Styled.IconWrapper>
      <Styled.Input
        placeholder={placeholder}
        palette={palette}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </Styled.InputContainer>
  );
};

export default SearchInput;
