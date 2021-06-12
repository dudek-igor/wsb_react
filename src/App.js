import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, View } from './components';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={() => <View />} />
        <Route path='/regular' component={() => <View />} />
        <Route path='/hot' component={() => <View />} />
        <Route path='*' component={() => <View />} />
      </Switch>
    </Router>
  );
};

export default App;
