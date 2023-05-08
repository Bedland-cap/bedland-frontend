import { DisplayListType } from 'components/organisms/DisplayList/DisplayList.types';

export const filterOptions = ['name', 'address'] as const;

export type SearchBarProps = { placeholder: string; setList: (arg: DisplayListType) => void };
