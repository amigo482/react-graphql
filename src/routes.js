import HomePage from '_pages/HomePage';
import UserInfoPage from '_pages/UserInfoPage';
import NotFoundPage from '_pages/NotFoundPage';
import LocalizationPage from '_pages/LocalizationPage';
import App from './app';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: HomePage,
      },
      {
        path: '/users/:id',
        component: UserInfoPage,
      },
      {
        path: '/localization',
        component: LocalizationPage,
      },
      {
        component: NotFoundPage,
      },
    ],
  },
];
