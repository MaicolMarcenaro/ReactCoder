import './App.css';
import { CartProvider } from './Context/CartContext';
import {ProductContext} from './Context/ProductContext';
import CartView from './components/CartView';
import ItemDetailsContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Order from './components/Order';

function App() {
  return (
    <>
    <CartProvider>
    <ProductContext>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Tienda Maik'/>} />
          <Route path='/category/:id' element={<ItemListContainer greeting='Tienda Maik'/>} />
          <Route path='/item/:id' element={<ItemDetailsContainer/>} />
          <Route path='/cart' element={<CartView/>} />
          <Route path='/order' element={<Order/>} />
        </Routes>
      </BrowserRouter>
    </ProductContext>
    </CartProvider>
    </>
  );
}

export default App;
