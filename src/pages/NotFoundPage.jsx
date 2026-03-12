import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <>
      <header>
        <h2 className="not-found-title">404</h2>
      </header>
      <main className="not-found">
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/" className="whitebutton">
          Go back home
        </Link>
      </main>
    </>
  );
}

// Alle links osv, der ikke har nogen "route" flyver brugeren direkte til denne "error" side.
