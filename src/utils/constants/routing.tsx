import { createBrowserRouter } from 'react-router-dom';
import MainBody from 'components/templates/MainBody/MainBody';
import LoginPage from 'components/pages/LoginPage/LoginPage';
import DashboardPage from 'components/pages/Dashboard/DashboardPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainBody variant='resident' logged={false}>
        <LoginPage />
      </MainBody>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <MainBody variant='resident' logged>
        <DashboardPage />
      </MainBody>
    ),
  },
]);

export default router;
