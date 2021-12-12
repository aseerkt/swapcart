import './CartInfo.css';
import { useCart } from '../context/cart/CartContext';
import { formatPrice } from '../utils';

function CartInfo() {
  const { cartItems: fullCartItems } = useCart();

  const cartItems = fullCartItems.filter((item) => !item.saved);

  const totalPrice = cartItems.reduce(
    (prev, curr) =>
      (prev += (curr.qty * (100 * curr.price)) / (100 - curr.discount)),
    0
  );
  const totalPriceWithDiscount = cartItems.reduce(
    (prev, curr) => (prev += curr.qty * curr.price),
    0
  );
  return (
    <aside className='cart-info'>
      <h2>Price Details</h2>
      <div className='price-grid'>
        <p>
          Price ({cartItems.reduce((prev, curr) => (prev += curr.qty), 0)}{' '}
          items)
        </p>
        <span>{formatPrice(totalPrice)}</span>
        <p>Discount</p>
        <span className='green'>
          -{formatPrice(totalPrice - totalPriceWithDiscount)}
        </span>
        <p>Delivery Charges</p>
        <span className='green'>FREE</span>
        <p className='bold'>Total Amount</p>
        <span className='bold'>{formatPrice(totalPriceWithDiscount)}</span>
      </div>
    </aside>
  );
}

export default CartInfo;
