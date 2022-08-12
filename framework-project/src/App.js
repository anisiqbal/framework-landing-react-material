import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Banner from './container/banner';
import Cards from './components/cards';
import Features from './features';
import Testimonials from './components/testimonials';
import PricingPlans from './container/pricingPlans';






function App() {
  return (
   <>

   <NavBar/>
   <Banner/>
   <Cards/>
   <Features/>
   <Testimonials/>
   <PricingPlans/>

   </>
  );
}

export default App;
