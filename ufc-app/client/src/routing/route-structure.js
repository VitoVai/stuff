import {
  PUBLIC_ONLY,
  AUTH,
  USER,
  ADMIN,
} from './auth-types';

const routeStructure = [
  {
    path: '/',
    pageName: 'NavbarLayout',
    childRoutes: [
      { index: true, pageName: 'HomePage' },
      { path: 'naujienos', pageName: 'NewsPage' },
      { path: 'reitingai', pageName: 'RankingsPage' },
      { path: 'renginiai', pageName: 'EventsPage' },
      {
        path: '/',
        pageName: 'ViewportLayout',
        childRoutes: [
          { path: 'prisijungti', pageName: 'LoginPage', auth: PUBLIC_ONLY },
          { path: 'registracija', pageName: 'RegisterPage', auth: PUBLIC_ONLY },
        ],
      },
      { path: '*', pageName: 'ErrorPage' },
    ],
  },
  {
    path: '/dashboard',
    pageName: 'DashboardLayout',
    childRoutes: [
      { index: true, pageName: 'ProfilePage', auth: AUTH },
      { path: 'user-info', pageName: 'UserInfoPage', auth: USER },
      { path: 'admin/statistics', pageName: 'StatisticsPage', auth: ADMIN },
      { path: 'admin/users', pageName: 'UserPanelPage', auth: ADMIN },
    ],
  },
];

export default routeStructure;
