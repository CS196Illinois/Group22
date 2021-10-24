import Top from "./components/Top"
import Button from "./components/Button"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from "./About";
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <Switch> 
            <Route exact path="/"> 
              <Top/>
              <Button/>
            </Route>
            <Route path="/about"> 
              <About/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;



