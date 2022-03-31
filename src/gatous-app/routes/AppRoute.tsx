import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeScreen } from '../components/screens/HomeScreen';
import { NavbarScreen } from '../components/UI/NavbarScreen';
import { NavScreen } from '../components/UI/NavScreen';

export const AppRoute = () => {
  return (
    <Router>
      <div>
        <NavScreen />
        <NavbarScreen />

        <Switch>
          <Route path='/' component={HomeScreen} />
        </Switch>
      </div>
    </Router>
  );
};
