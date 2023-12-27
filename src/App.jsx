import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/category/:categoryId" element={<CategoryPage />} />
        <Route exact path="/products/:id" element={<ProductsPage />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
