import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import products from "./products";

import { add, subtract } from './utils/math'


function App() {
  // console.log(add(3,4), subtract(3,4))
  return (
    <div className="App">
      <SearchBar />
      <ProductList products={products}/>
    </div>
  );
}

export default App;
