import DirectoryMenu from "../../components/directory-menu/directory-menu.component";
import "./homepage.styles.scss";
import { withRouter } from "react-router-dom";

const HomePage = (props) => (
  <div className="homepage">
    <DirectoryMenu />
  </div>
);

export default withRouter(HomePage);
