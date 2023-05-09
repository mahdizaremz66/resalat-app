import FooterComponent from "./components/ui/Footer.component";
import NavbarComponent from "./components/ui/Navbar.component";
import { Routes ,Route} from "react-router-dom";
import HomePage from "./pages/Home.page";
import FAQPage from "./pages/FAQ.page";
import AboutUsPage from "./pages/AboutUs.page";
import ContactUsPage from "./pages/ContactUs.page";


function App() {
  return (
    <div>
      {/*Navbar*/}
      <NavbarComponent />

      {/*Wapper*/}
      <div className="wapper">
        <Routes>
          <Route path="/" element= {<HomePage />} />
          <Route path="/faq" element= {<FAQPage />} />
          <Route path="/about-us" element= {<AboutUsPage />} />
          <Route path="/contact-us" element= {<ContactUsPage />} />

        </Routes>

      </div>

      {/*Footer*/}
      <FooterComponent />
       
    </div>
  );
}

export default App;
