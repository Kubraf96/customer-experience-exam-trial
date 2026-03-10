import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import DetaljePage from "./pages/detaljeSide";
import NotFoundPage from "./pages/NotFoundPage";
import Banner from "./components/banner";
import Footer from "./components/footer";
import "./css/app.css";

export default function App() {
  return (
    <div className="app">
      <Banner />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<DetaljePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
