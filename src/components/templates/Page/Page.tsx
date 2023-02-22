import Typography from 'components/atoms/Typography/Typography';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  align-items: start;
  display: flex;
  justify-content: center;
  padding: 1rem 1.5rem;
  width: 100%;
`;

const Title = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  width: 100%;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

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
