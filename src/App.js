import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';

const App = () => {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
};

export default App;
