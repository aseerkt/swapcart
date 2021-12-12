import { FaCartPlus } from 'react-icons/fa';
import CartInfo from '../components/CartInfo';
import CartItem from '../components/CartItem';
import { useCart } from '../context/cart/CartContext';
import './CartPage.css';

function CartPage() {
  const { cartItems } = useCart();

  const itemsInCart = cartItems.filter((item) => !item.saved);
  const savedItems = cartItems.filter((item) => item.saved);

  return (
    <section className='cart-page'>
      <div className='cart-section'>
        <div className='cart-items'>
          <header>
            <h2>
              My Cart (
              {itemsInCart.reduce((prev, curr) => (prev += curr.qty), 0)})
            </h2>
          </header>
          <ul className='cart-list'>
            {!itemsInCart.length && (
              <div className='no-cart-placeholder'>
                <FaCartPlus /> <h3>Cart is empty</h3>
              </div>
            )}
            {itemsInCart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
        {savedItems.length && (
          <div className='saved-items'>
            <h2>
              Saved For Later (
              {savedItems.reduce((prev, curr) => (prev += curr.qty), 0)})
            </h2>
            <ul className='cart-list'>
              {savedItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
          </div>
        )}
      </div>
      <CartInfo />
    </section>
  );
}

export default CartPage;
