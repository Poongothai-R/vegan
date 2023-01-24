import "./styles/global/App.css";
import "./styles/global/variables.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import GoToTop from "./GoTop";

// No comments -1
// naming -1: the folder Pages should be lowercase
export default function App() {
  return (
    <BrowserRouter>
      {/* <div className="App"> */}
      <GoToTop />
      <Navbar />
      <Routes>
        {/* url paths should be lowercase */}
        {/* Great Route organization, thats exactly what i wanted to teach tomorrow (Review done on Tuesday 24, 2023) */}
        <Route path="/" element={<Home />} />
        <Route path="/:Category" element={<Category />} />
        <Route path="/:Category/:id" element={<Product />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
      {/* </div>  */}
    </BrowserRouter>
  );
}
