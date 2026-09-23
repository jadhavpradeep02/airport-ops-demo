import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import MobileNavigation from './MobileNavigation';
import './Layout.scss';

export default function AppLayout() {
  return (
    //comment added
    <div className="app-layout">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Sidebar />
      <div className="app-workspace">
        <Header />
        <main id="main-content" className="app-content" tabIndex={-1}><Outlet /></main>
      </div>
      <MobileNavigation />
    </div>
  );
}
