import "./App.css";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route>404 Not found!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
