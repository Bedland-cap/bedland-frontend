import { FC, PropsWithChildren } from 'react';
import ErrorMsg from './ErrorMessage.styled';

const ErrorMessage: FC<PropsWithChildren> = ({ children }) => (
  <ErrorMsg>{children}</ErrorMsg>
);

export default ErrorMessage;
