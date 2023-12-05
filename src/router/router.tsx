// import { createBrowserRouter, RouteObject, Routes } from 'react-router-dom';
// import { DetailedPage } from '../page/detailed-page';
// import { MainPage } from '../page/main-page';
// import { AuthPage } from '../page/auth-page';
// import { RequireAuth } from './require-auth';
// import { Layout } from '../components/layout';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RequireAuth } from './require-auth';
import { Layout } from '../components/layout';
import { MainPage } from '../page/main-page';
import { DetailedPage } from '../page/detailed-page';
import { AuthPage } from '../page/auth-page';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <RequireAuth>
              <Layout />
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
