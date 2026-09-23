import { useAuth } from '../../providers/AuthProvider';

export default function Header() {
  const { user, signOut } = useAuth();
  return (
    <header className="app-header">
      <span className="header-context">Ground Handling</span>
      <div className="header-user">
        <span className="demo-label">Demo mode</span>
        <span className="user-role">{user.role}</span>
        <span className="avatar" aria-label={user.name}>{user.initials}</span>
        <button className="button button--secondary" onClick={signOut}>Sign out</button>
      </div>
    </header>
  );
}
