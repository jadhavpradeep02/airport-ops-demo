import { Link } from 'react-router-dom';
import './Pages.scss';

export default function NotFoundPage() {
  return <main className="standalone-page"><section className="login-card"><span className="eyebrow">404</span><h1>Page not found</h1><p>The requested page does not exist.</p><Link className="button" to="/turnaround">Back to Turnaround</Link></section></main>;
}
