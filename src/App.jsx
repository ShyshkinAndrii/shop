import React from "react";
import Header from "./components/Header";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {

  return (
    <div className=" mx-auto ">
      <div className='layout'>
        <Router >
          <Header />
          <div className="main">
            <main >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="productpage" element={<ProductsPage />} />
                <Route path="about" element={<About />} />
                <Route path="/product/:id" element={<ProductDetails />} />
              </Routes>
            </main>
          </div>
          <Sidebar />
          <Footer />
        </Router>
      </div>

    </div>
  )
}

export default App
