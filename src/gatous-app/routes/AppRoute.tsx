import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FooterComponent } from '../components/footer/FooterComponent';
import { CakeScreen } from '../components/screens/CakeScreen';
import { HomeScreen } from '../components/screens/HomeScreen';
import { PastelesScreen } from '../components/screens/PastelesScreen';
import { PersonalizadoScreen } from '../components/screens/PersonalizadoScreen';
import { TemporadaScreen } from '../components/screens/TemporadaScreen';
import { NavbarScreen } from '../components/UI/NavbarScreen';
import { NavScreen } from '../components/UI/NavScreen';

export const AppRoute = () => {
  return (
    <Router>
      <>
        <NavScreen />
        <NavbarScreen />

        <Container>
          <Switch>
            <Route path='/cakes' component={CakeScreen} />
            <Route path='/pasteles' component={PastelesScreen} />
            <Route path='/temporada' component={TemporadaScreen} />
            <Route path='/personalizado' component={PersonalizadoScreen} />
            <Route path='/carrito' component={HomeScreen} />
            <Route path='/' component={HomeScreen} />
          </Switch>
        </Container>

        <FooterComponent />
      </>
    </Router>
  );
};
