import { NavLink } from 'react-router-dom';
import { navigation } from './navigation';

export default function MobileNavigation() {
  return (
    <nav className="mobile-navigation" aria-label="Mobile navigation">
      {navigation.map(({ to, shortLabel }) => <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'is-active' : undefined}>{shortLabel}</NavLink>)}
    </nav>
  );
}
