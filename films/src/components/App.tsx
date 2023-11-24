import { Container } from '@mui/material';
import { CardList } from './card-list/card-list';
import { Filters } from './filters/filters';
import { Header } from './header/header';
import UserProvider from '../context/user-context';

function App() {
  return (
    <UserProvider>
      <Header />
      <Container
        maxWidth="xl"
        sx={{ display: 'flex', gap: '10px', m: '16px 0', height: '100%' }}
      >
        <Filters />
        <CardList />
      </Container>
    </UserProvider>
  );
}

export default App;
