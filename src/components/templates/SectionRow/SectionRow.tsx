import { PropsWithChildren, useContext } from 'react';
import { ColorNames } from 'theme/theme.types';
import { ThemeContext } from 'theme/ThemeContext';
import SectionRowLayout from './SectionRow.styled';

type SectionRowProps = {
  backgroundColor?: ColorNames;
};

const defaultProps: SectionRowProps = {
  backgroundColor: 'background',
};

const SectionRow = ({
  backgroundColor = 'background',
  children,
}: PropsWithChildren<SectionRowProps>) => {
  const { palette } = useContext(ThemeContext);
  return <SectionRowLayout backgroundColor={palette[backgroundColor]}>{children}</SectionRowLayout>;
};

export default SectionRow;

SectionRow.defaultProps = defaultProps;
