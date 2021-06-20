import './App.css';
import Menu from './menu/Menu';
import Home from './home/Home';
import Clients from './clients/Clients';
import Features from './features/Features';
import Jackpot from './jackpot/Jackpot';
import SectionSpaceSm from './sectionSpaceSm/SectionSpaceSm';
import Facts from './facts/Facts';
import Ultimate from './ultimate/Ultimate';
import Prices from './prices/Prices';
import Testimonials from './testimonials/Testimonials';
import Faqs from './faqs/Faqs';
import Download from './download/Download';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <Clients />
      <Features />
      <Jackpot />
      <SectionSpaceSm />
      <Facts />
      <Ultimate />
      <Prices />
      <Testimonials />
      <Faqs />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
