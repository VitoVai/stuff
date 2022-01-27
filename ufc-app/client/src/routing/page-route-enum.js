import ViewportLayout from '../components/layouts/viewport-layout';
import NavbarLayout from '../components/layouts/navbar-layout';
import DashboardLayout from '../components/layouts/dashboard-layout';

// no-auth
import HomePage from '../pages/home-page';
import NewsPage from '../pages/news-page';
import RankingsPage from '../pages/rankings-page';
import EventsPage from '../pages/events-page';
import ErrorPage from '../pages/error-page';
// public-only
import LoginPage from '../pages/public-only/login-page';
import RegisterPage from '../pages/public-only/register-page';
// auth
import ProfilePage from '../pages/auth/profile-page';
// user
import UserInfoPage from '../pages/auth/user/user-info-page';
// admin
import StatisticsPage from '../pages/auth/admin/statistics-page';
import UserPanelPage from '../pages/auth/admin/user-panel-page';

export default {
  ViewportLayout,
  NavbarLayout,
  DashboardLayout,
  HomePage,
  NewsPage,
  RankingsPage,
  EventsPage,
  ErrorPage,
  LoginPage,
  RegisterPage,
  ProfilePage,
  UserInfoPage,
  StatisticsPage,
  UserPanelPage,
};
