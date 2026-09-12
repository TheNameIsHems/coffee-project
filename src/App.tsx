import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import HeroSection from './pages/HeroSection';
import AromaExperience from './components/sections/AromaExperience';
import SignatureDrink from './components/sections/SignatureDrink';
import MenuSection from './pages/MenuSection';
import ChooseYourMood from './components/sections/ChooseYourMood';
import CoffeeOrigin from './components/sections/CoffeeOrigin';
import Testimonials from './components/sections/Testimonials';
import VisitUs from './components/sections/VisitUs';
import FinalCTA from './components/sections/FinalCTA';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#140d0a] text-[#f7f2ea] font-sans overflow-x-hidden selection:bg-[#c89d66] selection:text-[#140d0a]">
      {/* Fixed Luxury Navigation */}
      <Navbar />

      {/* Main Experience Flow */}
      <main>
        {/* 1. Fullscreen Hero Section */}
        <HeroSection />

        {/* 2. Aroma Experience ("MORE THAN COFFEE.") */}
        <AromaExperience />

        {/* 3. Feature Signature Drink ("MEET THE AROMA LATTE.") */}
        <SignatureDrink />

        {/* 4. Featured Menu ("FIND YOUR PERFECT CUP.") */}
        <MenuSection />

        {/* 5. Interactive Mood Matcher ("WHAT ARE YOU IN THE MOOD FOR?") */}
        <ChooseYourMood />

        {/* 6. Coffee Origin Story ("FROM BEAN TO MOMENT.") */}
        <CoffeeOrigin />

        {/* 7. Customer Testimonials ("THEIR FAVORITE RITUAL.") */}
        <Testimonials />

        {/* 8. Visit Us / Location */}
        <VisitUs />

        {/* 9. Dramatic Final CTA ("YOUR NEXT CUP IS WAITING.") */}
        <FinalCTA />
      </main>

      {/* Premium Minimal Footer */}
      <Footer />

      {/* Slide-in Cart Drawer */}
      <CartDrawer />
    </div>
  );
}

export default App;
