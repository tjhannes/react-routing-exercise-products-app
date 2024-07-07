import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function PageHome() {
  return (
    <>
      <NavBar />
      <Link to="/men">Männer</Link>
      <br />
      <Link to="/women">Frauen</Link>
    </>
  );
}

export default PageHome;
