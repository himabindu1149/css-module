import Product from './components/Product';
import { ProductData } from './content';
import app_styles from '../src/styles/App.module.css';

function App() {
  return (
    <>
      <h1> Trending Gadgets</h1>
      <h3 className={app_styles.error}>An error occured</h3>
      <div className="App">
        {ProductData.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </>
  );
}

export default App;
