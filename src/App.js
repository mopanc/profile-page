import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path= "/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
