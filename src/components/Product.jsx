import './Product.css';
import { FaCartPlus } from 'react-icons/fa';
import { useCartDispatch } from '../context/cart/CartContext';
import { formatPrice } from '../utils';

function Product({ product }) {
  const { addToCart } = useCartDispatch();

  return (
    <li className='product'>
      <img src={product.image} alt={product.name} />
      <div className='product-details'>
        <header>
          <strong>{product.brand}</strong>
          <h1>{product.name}</h1>
        </header>
        <footer>
          <p>{formatPrice(product.price)}</p>
          <button onClick={() => addToCart(product)} className='add-to-cart'>
            <FaCartPlus />
            <span>Add to Cart</span>
          </button>
        </footer>
      </div>
    </li>
  );
}

export default Product;
