import './Header.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/cart/CartContext';

function Header() {
  const { cartItems } = useCart();

  const cartItemsLength = cartItems.reduce(
    (prev, curr) => (prev += !curr.saved ? curr.qty : 0),
    0
  );

  return (
    <header className='header'>
      <div className='container'>
        <Link to='/'>
          <h1>SwapCart</h1>
        </Link>
        <nav>
          <Link to='/'>Products</Link>
          <Link to='/cart'>
            Cart <span className='cart-item-count'>{cartItemsLength}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
