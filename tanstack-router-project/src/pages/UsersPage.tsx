import { Link } from '@tanstack/react-router';

const USERS = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
  { id: '3', name: 'Carol' },
];

export function UsersPage() {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {USERS.map((user) => (
          <li key={user.id}>
            {/* TanStack Router infers that 'to' must be a valid route and 'params.id' is required */}
            <Link to="/users/$id" params={{ id: user.id }}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
