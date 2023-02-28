import Typography from 'components/atoms/Typography/Typography';
import { PropsWithChildren } from 'react';
import { Box, Title, Content } from './Page.styled';

type PageProps = {
  title?: string;
};

const defaultProps: PageProps = {
  title: '',
};

const Page = ({ title, children }: PropsWithChildren<PageProps>) => (
  <Box>
    <Title>
      <Typography variant='pageTitle' color='default'>
        {title}
      </Typography>
    </Title>
    <Content>{children}</Content>
  </Box>
);

export default Page;

Page.defaultProps = defaultProps;
