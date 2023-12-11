import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RequireAuth } from './require-auth';
import { Layout } from '../components/layout';
import { MainPage } from '../page/main-page';
import { DetailedPage } from '../page/detailed-page';
import { AuthPage } from '../page/auth-page';
import MoviesProvider from '../context/movies-context';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <RequireAuth>
              <MoviesProvider>
                <Layout />
              </MoviesProvider>
            </RequireAuth>
          }
        >
          <Route path="/strada-films" element={<MainPage />} />
          <Route path="/strada-films/:id" element={<DetailedPage />} />
        </Route>
        <Route path="/strada-films/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}
