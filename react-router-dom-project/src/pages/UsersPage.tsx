import { Link } from 'react-router-dom';
import { generatePath } from 'react-router-dom';
import { ROUTES } from '../routes';

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
            {/* generatePath ensures params match the route pattern */}
            <Link to={generatePath(ROUTES.USER_DETAIL, { id: user.id })}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
