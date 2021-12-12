import './ProductPage.css';
import data from '../data.json';
import Product from '../components/Product';

function ProductPage() {
  return (
    <ul className='product-list'>
      {data.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ProductPage;
