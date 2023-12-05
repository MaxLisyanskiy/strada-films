import { Container } from '@mui/material';
import { Header } from './header/header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header title={'title'} />
      <Container
        maxWidth="xl"
        sx={{ display: 'flex', gap: '10px', m: '16px 0', height: '100%' }}
      >
        <Outlet />
      </Container>
    </>
  );
};
