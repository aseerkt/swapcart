import './Header.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/cart/CartContext';

function Header() {
  const { cartItems } = useCart();

  return (
    <header className='header'>
      <div className='container'>
        <Link to='/'>
          <h1>SwapCart</h1>
        </Link>
        <nav>
          <Link to='/'>Products</Link>
          <Link to='/cart'>
            Cart <span className='cart-item-count'>{cartItems.length}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
