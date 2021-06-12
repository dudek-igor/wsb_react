import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <div>home</div>
        </Route>
        <Route path='/regular'>
          <div>regular</div>
        </Route>
        <Route path='/hot'>
          <div>Hot</div>
        </Route>
        <Route path='*'>
          <div>error 404</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
