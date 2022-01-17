import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { Navigate } from 'react-router-dom';
import CartContextProvider from './components/CartContext/CartContext';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

function App() {
  return (
    <CartContextProvider>
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
              element={<><Home/><ItemListContainer greeting='Todos nuestros productos' /></>}
            />
            <Route
              exact
              path="/categoria/:idCategory"
              element={<ItemListContainer />}
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
            <Route
              exact
              path="/form"
              element={<Form />}
              
            />
          </Routes>
        </center>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
