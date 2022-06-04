import './App.css';
import Navbar from './components/Navbar';
import Newsbody from './components/Newsbody';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      {/* <h1>Hellowald</h1> */}
      <Navbar/>
      <Switch>
          <Route exact  path="/"><Newsbody key={'general'} pagesize={12} country="in" category="general"/></Route>
          <Route exact path="/science"><Newsbody key={'science'} pagesize={12} country="in" category="science"/></Route>
          <Route exact path="/business"><Newsbody key={'business'} pagesize={12} country="in" category="business"/></Route>
          <Route exact path="/technology"><Newsbody key={'technology'} pagesize={12} country="in" category="technology"/></Route>
          <Route exact path="/health"><Newsbody key={'health'} pagesize={12} country="in" category="health"/></Route>
          <Route exact path="/sports"><Newsbody key={'sports'} pagesize={12} country="in" category="sports"/></Route>
          
        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
