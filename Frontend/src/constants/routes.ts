import {lazy} from 'react';

import IconDashboard from '../assets/icons/IconDashboard';
import IconStrategyManager from '../assets/icons/IconStrategyManager';
import IconMyAssets from '../assets/icons/IconMyAssets';

const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const StrategyManagerPage = lazy(() => import ('../pages/StrategyManagerPage'));
const MyAssetsPage = lazy(() => import ('../pages/MyAssetsPage'));

enum AppRoutes {
  Dashboard = '/dashboard',
  StrategyManger = '/strategymanager',
  MyAssetsPage = '/myassets',
}

export const appRoutes = [
  {key: 'Dashboard', path: AppRoutes.Dashboard, element: DashboardPage},
  {key: 'StrategyManger', path: AppRoutes.StrategyManger, element: StrategyManagerPage},
  {key: 'MyAssetsPage', path: AppRoutes.MyAssetsPage, element: MyAssetsPage},
];

export const headerLinks = [
  {name: 'dashboard', url: AppRoutes.Dashboard, icon: IconDashboard},
  {name: 'strategymanager', url: AppRoutes.StrategyManger, icon: IconStrategyManager},
  {name: 'myassets', url: AppRoutes.MyAssetsPage, icon: IconMyAssets},
];
