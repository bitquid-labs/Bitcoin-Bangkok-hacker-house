import {lazy} from 'react';

const DashboardPage = lazy(() => import('pages/DashboardPage'));
const StrategyManagerPage = lazy(() => import ('pages/StrategyManagerPage'));

enum AppRoutes {
  Dashboard = '/dashboard',
  StrategyManger = '/strategymanager',
}

export const appRoutes = [
  {key: 'Dashboard', path: AppRoutes.Dashboard, element: DashboardPage},
  {key: 'StrategyManger', path: AppRoutes.StrategyManger, element: StrategyManagerPage},
];

export const headerLinks = [
  {name: 'dashboard', url: AppRoutes.Dashboard},
  {name: 'strategymanager', url: AppRoutes.StrategyManger},
];
