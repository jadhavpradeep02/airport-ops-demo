import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import AppLayout from '../components/layout/AppLayout';
import FlightLayout from '../components/layout/FlightLayout';
import PlaceholderPage from '../pages/PlaceholderPage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/turnaround" replace />} />
          <Route
            path="/turnaround"
            element={
              <PlaceholderPage
                title="Turnaround Board"
                description="Flight overview, filters, and turnaround progress will appear here."
              />
            }
          />
          <Route path="/turnaround/:flightId" element={<FlightLayout />}>
            <Route
              index
              element={
                <PlaceholderPage
                  title="Tasks"
                  description="The selected flight’s task checklist will appear here."
                />
              }
            />
            <Route
              path="dependencies"
              element={
                <PlaceholderPage
                  title="Dependency View"
                  description="Task dependencies and downstream impact will appear here."
                />
              }
            />
            <Route
              path="details"
              element={
                <PlaceholderPage
                  title="Flight Details"
                  description="Flight and operational information will appear here."
                />
              }
            />
          </Route>
          <Route
            path="/sla-dashboard"
            element={
              <PlaceholderPage
                title="SLA Dashboard"
                description="Operational KPIs and SLA performance will appear here."
              />
            }
          />
          <Route
            path="/templates"
            element={
              <PlaceholderPage
                title="Task Templates"
                description="Turnaround templates and task configuration will appear here."
              />
            }
          />
          <Route
            path="/reports"
            element={
              <PlaceholderPage
                title="Reports"
                description="Historical turnaround performance and reporting will appear here."
              />
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
