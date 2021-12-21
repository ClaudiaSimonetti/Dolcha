import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <center>
        <NavBar />
        <Routes>
          <Route
            exact
            path="*"
            element={<Navigate replace to="/"/>}
          />
          <Route
            exact
            path="/"
            element={<ItemListContainer greeting="Bienvenido a Dolcha Bakery"/>}
          /> 
          <Route
            exact
            path="/categoria/:idCategory"
            element={<ItemListContainer greeting="Bienvenido a Dolcha Bakery"/>}
          /> 
          <Route
            exact
            path="/detalle/:idProduct"
            element={<ItemDetailContainer/>}
          />
          <Route
            exact
            path="/cart"
            element={<Cart />}
            
          />
        </Routes>
      </center>
    </BrowserRouter>
  );
}

export default App;
