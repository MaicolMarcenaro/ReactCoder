import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'
import ListItem from './components/ListItem'

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting='Tienda Maik'/>
      <ListItem/>
    </>
  );
}

export default App;
