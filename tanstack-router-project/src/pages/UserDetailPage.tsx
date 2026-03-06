import { Link } from '@tanstack/react-router';
import { userDetailRoute } from '../router';

const USER_MAP: Record<string, { name: string; role: string }> = {
  '1': { name: 'Alice', role: 'Admin' },
  '2': { name: 'Bob', role: 'Editor' },
  '3': { name: 'Carol', role: 'Viewer' },
};

export function UserDetailPage() {
  // useParams is fully typed — TypeScript knows `id` is a string from the route definition
  const { id } = userDetailRoute.useParams();
  const user = USER_MAP[id];

  if (!user) {
    return (
      <div>
        <h1>User not found</h1>
        <Link to="/users">← Back to Users</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>User Detail</h1>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <Link to="/users">← Back to Users</Link>
    </div>
  );
}
