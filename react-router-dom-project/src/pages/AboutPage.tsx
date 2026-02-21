export function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>
        This project shows how to achieve type-safe routing with react-router-dom by:
      </p>
      <ul>
        <li>Defining route paths as typed constants</li>
        <li>Using <code>generatePath</code> with typed params to build URLs</li>
        <li>Using <code>useParams&lt;Params&gt;()</code> for type-safe param access</li>
      </ul>
    </div>
  );
}
