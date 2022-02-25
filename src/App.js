import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import ProductItem from './components/ProductItem';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='products' element={<Products />}>
        </Route>
        <Route path='products/:id' element={<ProductItem />}></Route>
        <Route path='*' element={<NotFound/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
