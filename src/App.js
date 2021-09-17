import "./App.css";
import HomePage from "./pages/homepage.component";
import { Link, Route, Switch } from "react-router-dom";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hats Page</h1>
      <Link to={`${props.match.url}13`}>link to hat 13</Link>
    </div>
  );
};

const HatsDetails = (props) => {
  return (
    <>
      <h1>Hats Details</h1>
      <p>url: {props.match.url}</p>
      <p>Id: {props.match.params.id}</p>
    </>
  );
};

const JacketsPage = (props) => {
  return <h1>Jackets Page</h1>;
};

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/shop/hats" component={HatsPage} />
      <Route path="/shop/hats/:id" component={HatsDetails} />
      <Route exact path="/shop/jackets" component={JacketsPage} />
    </Switch>
  );
}

export default App;
