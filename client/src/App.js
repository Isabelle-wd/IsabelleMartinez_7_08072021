import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import createPost from "./pages/CreatePost";
/* import { route } from '../../server/routes/Posts'; */

function App() {

  return (
    <div className="App">
      <Router>
        <Link to="/"> Accueil </Link>
        <Link to="CreatePost"> Créer une publication </Link>  
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/CreatePost" exact component={createPost} />
        </Switch>
      </Router>          
    </div>
  );
}

export default App;
