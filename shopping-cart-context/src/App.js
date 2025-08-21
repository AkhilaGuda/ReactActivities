import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";
import ProductList from "./components/ProductList";

function App() {
  return (
    <CartProvider>
      <div style={{textAlign:"center", fontSize:"30px"}}>
        <ProductList/>
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
