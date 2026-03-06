import { NavLink, Outlet } from 'react-router-dom';
import { ROUTES } from '../routes';

export function Layout() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 800, margin: '0 auto', padding: '1rem' }}>
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid #ccc' }}>
        <NavLink to={ROUTES.HOME} style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
          Home
        </NavLink>
        <NavLink to={ROUTES.ABOUT} style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
          About
        </NavLink>
        <NavLink to={ROUTES.USERS} style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
          Users
        </NavLink>
      </nav>
      <main style={{ padding: '1rem 0' }}>
        <Outlet />
      </main>
    </div>
  );
}
