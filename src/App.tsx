import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import HeroSection from './pages/HeroSection';
import FeaturedSection from './pages/FeaturedSection';
import MenuSection from './pages/MenuSection';
import AboutSection from './pages/AboutSection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedSection />
        <MenuSection />
        <AboutSection />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}

export default App;
