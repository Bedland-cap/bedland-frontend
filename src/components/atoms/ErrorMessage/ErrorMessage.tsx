import { FC, PropsWithChildren } from 'react';

import Icon from '../Icon/Icon';
import Typography from '../Typography/Typography';
import * as Styled from './ErrorMessage.styled';

const ErrorMessage: FC<PropsWithChildren> = ({ children }) => (
  <Styled.ErrorRow>
    <div style={{ display: 'flex' }}>
      <Icon name='alert' color='danger' size={20} isActive={false} />
    </div>
    <Typography variant='error' color='danger'>
      {children}
    </Typography>
  </Styled.ErrorRow>
);

export default ErrorMessage;
