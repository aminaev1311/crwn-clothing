import DirectoryMenu from "../components/directory-menu/directory-menu.component";
import "./homepage.styles.scss";
import { Link, withRouter } from "react-router-dom";

const HomePage = (props) => (
  <div className="homepage">
    <Link to="shop/hats">Hats</Link>
    <Link to="shop/jackets">Jackets</Link>
    <button onClick={() => props.history.push("shop/hats")}>
      Hats via history
    </button>
    <DirectoryMenu />
  </div>
);

export default withRouter(HomePage);
