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
import { Route, Routes } from 'react-router-dom';

export const RoutesForNotLoggedIn = () => (
  <Routes>
    <Route path='/' element={<LoginPage />} />
    <Route path='/*' element={<LoginPage />} />
  </Routes>
);

export const RoutesForLoggedIn = () => (
  <Routes>
    <Route path='/' element={<DashboardPage />} />
    <Route path='/payments' element={<PaymentsPage />} />
    <Route path='/voting' element={<VotingPage />} />
    <Route path='/messages' element={<MessagesPage />} />
    <Route path='/wall' element={<WallPage />} />
    <Route path='/buildings' element={<BuildingsPage />} />
    <Route path='/flats' element={<FlatsPage />} />
    <Route path='/reports' element={<ReportsPage />} />
    <Route path='/residents' element={<ResidentsPage />} />
    <Route path='/*' element={<DashboardPage />} />
  </Routes>
);
