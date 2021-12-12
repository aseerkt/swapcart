import './ProductPage.css';
import data from '../data.json';
import Product from '../components/Product';
import { useCart } from '../context/cart/CartContext';

function ProductPage() {
  const { cartItems } = useCart();

  return (
    <ul className='product-list'>
      {data.map((product) => (
        <Product
          key={product.id}
          product={product}
          existInCart={cartItems.some((item) => item.id === product.id)}
        />
      ))}
    </ul>
  );
}

export default ProductPage;
