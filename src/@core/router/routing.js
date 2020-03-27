import { Education, Home, How, Login, Register, What } from '../../pages';
import { resolveUser } from './resolvers';

const routes = [
  {
    path: '/',
    component: new Home(),
  },
  {
    path: 'education',
    component: new Education(),
  },
  {
    path: 'home',
    component: new Home(),
  },
  {
    path: 'how',
    component: new How(),
  },
  {
    path: 'login',
    component: new Login(),
    resolve: resolveUser,
  },
  {
    path: 'register',
    component: new Register(),
  },
  {
    path: 'what',
    component: new What(),
  },
  {
    path: 'welcome',
    component: {},
    resolve: resolveUser,
  },
];

export { routes };
