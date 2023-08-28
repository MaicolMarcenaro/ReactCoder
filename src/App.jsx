import './App.css';
import ItemDetailsContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Tienda Maik'/>} />
          <Route path='/category/:id' element={<ItemListContainer greeting='Tienda Maik'/>} />
          <Route path='/item/:id' element={<ItemDetailsContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
