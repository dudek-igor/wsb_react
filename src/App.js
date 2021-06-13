import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from 'components';
import { MainView, Error404 } from 'views';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route exact path='/' component={MainView} />
        <Route path='/regular' component={MainView} />
        <Route path='/hot' component={MainView} />
        <Route path='*' component={Error404} />
      </Switch>
    </Router>
  );
};

export default App;
