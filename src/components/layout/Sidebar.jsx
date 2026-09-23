import { NavLink } from 'react-router-dom';
import { navigation } from './navigation';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <NavLink className="brand" to="/turnaround"><span aria-hidden="true">✈</span> AirportOps</NavLink>
      <nav aria-label="Main navigation">
        {navigation.map(({ to, label }) => <NavLink key={to} to={to} className={({ isActive }) => `sidebar-link${isActive ? ' is-active' : ''}`}>{label}</NavLink>)}
      </nav>
      <div className="sidebar-footer">Operations<small>Airport Ground Handling</small></div>
    </aside>
  );
}
