import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { DetailedPage } from '../page/detailed-page';
import { MainPage } from '../page/main-page';

export const routes: RouteObject[] = [
  {
    path: '/strada-films',
    element: <MainPage />,
    // errorElement: <NotFoundPage />, // TODO: release this page later
  },
  {
    path: '/strada-films/:id',
    element: <DetailedPage />,
  },
];

export const router = createBrowserRouter(routes);