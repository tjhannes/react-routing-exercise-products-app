import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/men">Männer</Link>
        </li>
        <li>
          <Link to="/women">Frauen</Link>
        </li>
        <li>
          <Link to="/warenkorb">Warenkorb</Link>
        </li>
      </ul>
    </nav>
  );
}
