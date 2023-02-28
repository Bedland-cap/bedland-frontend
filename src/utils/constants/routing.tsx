import { createBrowserRouter } from 'react-router-dom';
import MainBody from 'components/templates/MainBody/MainBody';
import LoginPage from 'components/pages/LoginPage/LoginPage';
import DashboardPage from 'components/pages/Dashboard/DashboardPage';
import ResetPasswordPage from 'components/pages/ResetPasswordPage/ResetPasswordPage';

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
  {
    path: '/resetPassword',
    // this logged boolean below should be acquired
    // by the response from the server
    element: (
      <MainBody variant='resident' logged={false}>
        <ResetPasswordPage />
      </MainBody>
    ),
  },
]);

export default router;
