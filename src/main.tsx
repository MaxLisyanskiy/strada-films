import ReactDOM from 'react-dom/client';
import AppRoutes from './router/router';
import UserProvider from './context/user-context';
import MoviesProvider from './context/movies-context';
import './style/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <UserProvider>
    <MoviesProvider>
      <AppRoutes />
    </MoviesProvider>
  </UserProvider>,
);
