# Type-Safe Routing in React

This repository contains two Vite + React + TypeScript projects demonstrating different approaches to type-safe routing.

---

## Projects

### 1. `react-router-dom-project`

Demonstrates type-safe routing with **react-router-dom v6**.

**Key patterns:**
- Route paths defined as `const` constants (`ROUTES` object) to avoid magic strings
- `generatePath(ROUTES.USER_DETAIL, { id })` — typed params enforced at call site
- `useParams<UserDetailParams>()` — typed access to URL parameters
- Nested routes with `<Outlet />` for shared layout

**Pages:** Home, About, Users (list), User Detail (`/users/:id`)

```bash
cd react-router-dom-project
npm install
npm run dev
```

---

### 2. `tanstack-router-project`

Demonstrates type-safe routing with **TanStack Router v1** (code-based routing).

**Key patterns:**
- Routes defined with `createRootRoute` / `createRoute` — the route tree drives full TypeScript inference
- `Link to="/users/$id" params={{ id }}` — invalid routes or missing params are **compile-time errors**
- `route.useParams()` — params typed automatically from the route definition, no manual types needed
- `declare module '@tanstack/react-router' { interface Register { router } }` — global type registration

**Pages:** Home, About, Users (list), User Detail (`/users/$id`)

```bash
cd tanstack-router-project
npm install
npm run dev
```

---

## Comparison

| Feature | react-router-dom v6 | TanStack Router v1 |
|---|---|---|
| Route definition | String constants + `<Routes>` JSX | `createRoute` + route tree |
| Param types | Manual (`useParams<Params>()`) | Automatic from route definition |
| Link validation | Runtime only | Compile-time type error |
| `generatePath` safety | Typed via generics | Not needed — `Link` params are typed |
