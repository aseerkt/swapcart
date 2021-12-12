import { useCartDispatch } from '../context/cart/CartContext';
import { formatPrice } from '../utils';
import './CartItem.css';

function CartItem({ item }) {
  const { changeQty, removeFromCart, toggleSaved } = useCartDispatch();
  const originalPrice = ((100 * item.price) / (100 - item.discount)) * item.qty;

  return (
    <li className='cart-item'>
      <img src={item.image} alt={item.name} />
      <div className='item-details'>
        <header>
          <h3>{item.name}</h3>
          <p className='item-price'>
            <span>{formatPrice(item.qty * item.price)} </span>
            <small className='price-origin'>{formatPrice(originalPrice)}</small>
            <span className='discount'>{item.discount}% Off</span>
          </p>
        </header>
        <footer>
          <div className='qty-editor'>
            <button
              className='qty-btn'
              onClick={() => changeQty(item.id, item.qty - 1)}
            >
              -
            </button>
            <span className='item-qty'>{item.qty}</span>
            <button
              className='qty-btn'
              onClick={() => changeQty(item.id, item.qty + 1)}
            >
              +
            </button>
          </div>
          <div className='item-actions'>
            <button onClick={() => toggleSaved(item.id, item.saved)}>
              {item.saved ? 'Move to cart' : 'Save for later'}
            </button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </footer>
      </div>
    </li>
  );
}

export default CartItem;
