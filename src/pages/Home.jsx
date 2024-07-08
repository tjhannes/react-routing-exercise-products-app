import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function PageHome() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/women");
  }

  return (
    <>
      <NavBar />
      <Link to="/men">Männer</Link>
      <br />
      {/* Replace the next line with a button and useNavigate */}
      <Link to="/women">Frauen</Link>
      <button onClick={handleClick}>Frauen</button>
      <Link to="https://herewecode.io/" /* target="_blank" */>
        <button>External page</button>
      </Link>
    </>
  );
}

export default PageHome;
