import './App.css';
import Communities from './components/Communities';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <div className="jumbotron text-center" >
        <h1>OpenHouse.AI Coding Test</h1>
        <h5>Collection of geographic communities</h5> 
      </div>

      <Communities/>
      <Home/>
              
      <div className="jumbotron text-center">
      </div>
    </div>
  );
}

export default App;
