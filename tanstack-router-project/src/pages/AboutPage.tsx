export function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>
        This project shows TanStack Router's end-to-end type safety:
      </p>
      <ul>
        <li>Route params are fully typed via <code>createRoute</code></li>
        <li>
          <code>useParams</code>, <code>Link</code>, and <code>navigate</code> all infer
          types automatically from the route tree
        </li>
        <li>No manual type casting needed anywhere</li>
      </ul>
    </div>
  );
}
