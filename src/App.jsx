import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<ProductPage />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
