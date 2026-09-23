import { Link, NavLink, Outlet, useParams } from 'react-router-dom';

export default function FlightLayout() {
  const { flightId } = useParams();
  return (
    <>
      <Link className="back-link" to="/turnaround">
        ← Back to Board
      </Link>
      <div className="flight-context">
        Flight reference: <strong>{flightId}</strong>
      </div>
      <nav className="flight-tabs" aria-label="Flight views">
        <NavLink to="." end>
          Tasks
        </NavLink>
        <NavLink to="dependencies">Dependency View</NavLink>
        <NavLink to="details">Flight Details</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
