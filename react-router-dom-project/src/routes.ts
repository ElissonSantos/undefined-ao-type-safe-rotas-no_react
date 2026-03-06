// Type-safe route path constants
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  USERS: '/users',
  USER_DETAIL: '/users/:id',
} as const;

// Typed params for each parameterized route
export type UserDetailParams = {
  id: string;
};
