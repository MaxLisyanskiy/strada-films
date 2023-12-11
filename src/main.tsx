import ReactDOM from 'react-dom/client';
import AppRoutes from './router/router';
import { Provider } from 'react-redux';
import store from './store/store';

import './style/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
);
