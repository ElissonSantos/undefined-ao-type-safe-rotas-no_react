import { Link, Outlet } from '@tanstack/react-router';

export function Layout() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 800, margin: '0 auto', padding: '1rem' }}>
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid #ccc' }}>
        {/* TanStack Router's Link validates 'to' against the registered route tree at compile time */}
        <Link to="/" activeProps={{ style: { fontWeight: 'bold' } }}>
          Home
        </Link>
        <Link to="/about" activeProps={{ style: { fontWeight: 'bold' } }}>
          About
        </Link>
        <Link to="/users" activeProps={{ style: { fontWeight: 'bold' } }}>
          Users
        </Link>
      </nav>
      <main style={{ padding: '1rem 0' }}>
        <Outlet />
      </main>
    </div>
  );
}
