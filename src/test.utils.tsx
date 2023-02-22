import { render, RenderOptions } from '@testing-library/react';
import BuildingsPage from 'components/pages/BuildingsPage/BuildingsPage';
import DashboardPage from 'components/pages/DashboardPage/DashboardPage';
import FlatsPage from 'components/pages/FlatsPage/Flats';
import LoginPage from 'components/pages/LoginPage/LoginPage';
import MessagesPage from 'components/pages/MessagesPage/MessagesPage';
import PaymentsPage from 'components/pages/PaymentsPage/PaymentsPage';
import ReportsPage from 'components/pages/ReportsPage/ReportsPage';
import ResidentsPage from 'components/pages/ResidentsPage/ResidentsPage';
import VotingPage from 'components/pages/VotingPage/VotingPage';
import WallPage from 'components/pages/WallPage/WallPage';
import { PropsWithChildren, ReactElement } from 'react';
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import ThemeProvider from 'theme/ThemeContext';

const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid='location-display'>{location.pathname}</div>;
};

const AllTheProviders = ({ children }: PropsWithChildren<object>): JSX.Element => (
  <ThemeProvider>
    <BrowserRouter>
      {children}
      <Routes>
        <Route path='/' element={<DashboardPage />} />
        <Route path='/buildings' element={<BuildingsPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/payments' element={<PaymentsPage />} />
        <Route path='/voting' element={<VotingPage />} />
        <Route path='/messages' element={<MessagesPage />} />
        <Route path='/wall' element={<WallPage />} />
        <Route path='/flats' element={<FlatsPage />} />
        <Route path='/reports' element={<ReportsPage />} />
        <Route path='/residents' element={<ResidentsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<DashboardPage />} />
      </Routes>
      <LocationDisplay />
    </BrowserRouter>
  </ThemeProvider>
);

const customRender = (ui: ReactElement, options: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
