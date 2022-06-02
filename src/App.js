import './App.css';
import Navbar from './components/Navbar';
import Newsbody from './components/Newsbody';


function App() {
  return (
    <div className="App">
      {/* <h1>Hellowald</h1> */}
      <Navbar/>
      <Newsbody pagesize={12} country="in" category="science"/>
    </div>
  );
}

export default App;
