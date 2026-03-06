import { useParams, Link } from 'react-router-dom';
import { ROUTES } from '../routes';
import type { UserDetailParams } from '../routes';

const USER_MAP: Record<string, { name: string; role: string }> = {
  '1': { name: 'Alice', role: 'Admin' },
  '2': { name: 'Bob', role: 'Editor' },
  '3': { name: 'Carol', role: 'Viewer' },
};

export function UserDetailPage() {
  // useParams is typed with UserDetailParams — `id` is guaranteed to be a string
  const { id } = useParams<UserDetailParams>();
  const user = id ? USER_MAP[id] : undefined;

  if (!user) {
    return (
      <div>
        <h1>User not found</h1>
        <Link to={ROUTES.USERS}>← Back to Users</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>User Detail</h1>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <Link to={ROUTES.USERS}>← Back to Users</Link>
    </div>
  );
}
