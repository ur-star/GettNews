import "./App.css";
import Navbar from "./components/Navbar";
import Newsbody from "./components/Newsbody";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const pagesize = 12;
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* key is added so every time we change route it refetches the news otherwise we need to reload */}
        <Switch>
          <Route exact path="/">
            <Newsbody
              key={"general"}
              pagesize={pagesize}
              country="in"
              category="General"
            />
          </Route>
          <Route exact path="/science">
            <Newsbody
              key={"science"}
              pagesize={pagesize}
              country="in"
              category="Science"
            />
          </Route>
          <Route exact path="/business">
            <Newsbody
              key={"business"}
              pagesize={pagesize}
              country="in"
              category="Business"
            />
          </Route>
          <Route exact path="/technology">
            <Newsbody
              key={"technology"}
              pagesize={pagesize}
              country="in"
              category="Technology"
            />
          </Route>
          <Route exact path="/health">
            <Newsbody
              key={"health"}
              pagesize={pagesize}
              country="in"
              category="health"
            />
          </Route>
          <Route exact path="/sports">
            <Newsbody
              key={"sports"}
              pagesize={pagesize}
              country="in"
              category="Sports"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
