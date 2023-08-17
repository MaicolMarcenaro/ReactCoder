import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'
import ListItem from './components/ListItem'
import ConListItem from './components/ConListItem';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting='Tienda Maik'/>
      <ConListItem/>
    </>
  );
}

export default App;
