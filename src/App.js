import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import ShopcontextProvider from "./context/Shop-context";

function App() {
  return (
    <div className="App">
      <ShopcontextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopcontextProvider>
    </div>
  );
}

export default App;
