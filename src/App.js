import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamDetail from './Components/TeamDetail/TeamDetail';
import NotFound from './Components/NotFound/NotFound';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route exact path="/">
         <Home/>
       </Route>
       <Route path='/TeamDetail/:idTeam'>
        <TeamDetail/>
       </Route>
       <Route path='*'>
       <NotFound/>
       </Route>
      </Switch>
    </Router>
  );
}
export default App;
