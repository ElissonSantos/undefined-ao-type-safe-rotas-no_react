import {
  createRouter,
  createRoute,
  createRootRoute,
  redirect,
} from '@tanstack/react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { UsersPage } from './pages/UsersPage';
import { UserDetailPage } from './pages/UserDetailPage';

// Root route wraps everything with the Layout (navigation)
const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/users',
  component: UsersPage,
});

// $id is TanStack Router's syntax for a typed dynamic segment
export const userDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/users/$id',
  component: UserDetailPage,
});

const catchAllRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  beforeLoad: () => {
    throw redirect({ to: '/' });
  },
  component: () => null,
});

// The route tree drives full end-to-end TypeScript inference
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  usersRoute,
  userDetailRoute,
  catchAllRoute,
]);

export const router = createRouter({ routeTree });

// Register the router for type inference across the whole app
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
