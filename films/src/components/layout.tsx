import { Container } from '@mui/material';
import { Header } from './header/header';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Header title={title} />
      <Container
        maxWidth="xl"
        sx={{ display: 'flex', gap: '10px', m: '16px 0', height: '100%' }}
      >
        {children}
      </Container>
    </>
  );
};
