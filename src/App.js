import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemListContainer/ItemCount';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Dolcha Bakery"/>
      <ItemCount stock='5' />
    </div>
  );
}

export default App;
