import { Link } from "../Links";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de inicio.</p>
      <Link to="/about">Ir a sobre nosotros</Link>
    </>
  );
}
