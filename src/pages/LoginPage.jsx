import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';
import './Pages.scss';

const roles = ['Ramp Supervisor', 'Ground Handling Team', 'Operations Manager', 'System/Admin'];

export default function LoginPage() {
  const [role, setRole] = useState(roles[0]);
  const { user, signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  if (user) return <Navigate to="/turnaround" replace />;

  function handleSubmit(event) {
    event.preventDefault();
    signIn(role);
    const from = location.state?.from;
    navigate(from ? `${from.pathname}${from.search}${from.hash}` : '/turnaround', { replace: true });
  }

  return (
    <main className="standalone-page">
      <section className="login-card">
        <span className="eyebrow">AirportOps</span>
        <h1>Turnaround operations</h1>
        <p>Choose a demo role to explore the application shell.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="role">Demo role</label>
          <select id="role" value={role} onChange={(event) => setRole(event.target.value)}>{roles.map((item) => <option key={item}>{item}</option>)}</select>
          <button className="button" type="submit">Enter demo</button>
        </form>
        <small>This is a login placeholder. Demo access resets when you refresh.</small>
      </section>
    </main>
  );
}
