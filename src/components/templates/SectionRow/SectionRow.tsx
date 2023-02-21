import { PropsWithChildren } from 'react';
import SectionRowLayout from './SectionRow.styled';

const SectionRow = ({ children }: PropsWithChildren) => (
  <SectionRowLayout>{children}</SectionRowLayout>
);

export default SectionRow;
