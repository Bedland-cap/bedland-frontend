import Typography from 'components/atoms/Typography/Typography';
import { PropsWithChildren } from 'react';

import * as Styled from './Page.styled';

type PageProps = {
  title?: string;
};

const defaultProps: PageProps = {
  title: '',
};

const Page = ({ title, children }: PropsWithChildren<PageProps>) => (
  <Styled.Box>
    <Styled.Title>
      <Typography variant='header2' color='text'>
        {title}
      </Typography>
    </Styled.Title>
    <Styled.Content>{children}</Styled.Content>
  </Styled.Box>
);

export default Page;

Page.defaultProps = defaultProps;
