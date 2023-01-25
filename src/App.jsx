import './styles/global/App.css';
import './styles/global/variables.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Category from './pages/Category';
import Product from './pages/Product';
import Contact from './pages/Contact';
import GoToTop from "./GoTop";


export default function App() {
    return (
        <BrowserRouter>
            <GoToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:Category" element={<Category />} />
                <Route path="/:Category/:id" element={<Product />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};
