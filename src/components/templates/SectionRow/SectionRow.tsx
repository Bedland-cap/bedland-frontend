import { IChildren } from 'utils/interfaces/templates';
import SectionRowLayout from './SectionRow.styled';

const SectionRow = ({ children }: IChildren) => (
  <SectionRowLayout>{children}</SectionRowLayout>
);

export default SectionRow;
