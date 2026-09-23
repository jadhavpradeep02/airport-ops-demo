import './Pages.scss';

export default function PlaceholderPage({ title, description }) {
  return (
    <section className="placeholder-page">
      <div className="page-heading">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="placeholder-panel">
        <span className="eyebrow">Coming next</span>
        <h2>This page is ready to build</h2>
        <p>The application shell is in place. Page content will be added in a later phase.</p>
      </div>
    </section>
  );
}
