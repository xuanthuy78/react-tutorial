import "./App.css";
import ListUseState from "./components/ListUseState";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Switch } from "react-router";
import PostList from "./components/PostList";
import "antd/dist/antd.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <ul style={{ listStyle: "none" }}>
            <li>
              <Link to="/state">useState</Link>
            </li>
            <li>
              <Link to="/post">Post</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/state" component={ListUseState} />
            <Route path="/post" component={PostList} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
