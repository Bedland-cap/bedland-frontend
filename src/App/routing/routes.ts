import { Getters } from 'types/shared.types';

const routeFeature = [
  'homeForLoggedIn',
  'homeForNotLoggedIn',
  'homeForNotLoggedInManager',
  'payments',
  'voting',
  'messages',
  'wall',
  'buildings',
  'flats',
  'reports',
  'residents',
  'resetPassword',
] as const;
const routesUrl = [
  '/dashboard',
  '/login',
  '/login-manager',
  '/payments',
  '/voting',
  '/messages',
  '/wall',
  '/buildings',
  '/flats',
  '/reports',
  '/residents',
  '/resetPassword',
] as const;
type RouteFeature = (typeof routeFeature)[number];
export type RoutesUrl = (typeof routesUrl)[number];

type RoutesData = Getters<RouteFeature, RoutesUrl>;

const routes: RoutesData = {
  homeForLoggedIn: '/dashboard',
  homeForNotLoggedIn: '/login',
  homeForNotLoggedInManager: '/login-manager',
  payments: '/payments',
  voting: '/voting',
  messages: '/messages',
  wall: '/wall',
  buildings: '/buildings',
  flats: '/flats',
  reports: '/reports',
  residents: '/residents',
  resetPassword: '/resetPassword',
} as const;

export default routes;
