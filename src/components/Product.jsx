import './Product.css';
import { FaCartPlus } from 'react-icons/fa';
import { useCartDispatch } from '../context/cart/CartContext';
import { formatPrice } from '../utils';
import { useNavigate } from 'react-router-dom';

function Product({ product, existInCart }) {
  const { addToCart } = useCartDispatch();
  const navigate = useNavigate();

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
          <button
            onClick={() => {
              if (existInCart) navigate('/cart');
              else addToCart(product);
            }}
            className='add-to-cart'
          >
            <FaCartPlus />
            <span>{existInCart ? 'Go to cart' : 'Add to Cart'}</span>
          </button>
        </footer>
      </div>
    </li>
  );
}

export default Product;
