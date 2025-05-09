import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container" style={{ 
      padding: "100px 20px", 
      textAlign: "center",
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>Page Not Found</h2>
      <p style={{ marginBottom: "2rem" }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="button-primary">
        Return to Home
      </Link>
    </div>
  );
}