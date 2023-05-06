import FooterComponent from "./components/ui/Footer.components";
import NavbarComponent from "./components/ui/Navbar.component";

function App() {
  return (
    <div>
      {/*Navbar*/}
      <NavbarComponent />

      {/*Wapper*/}
      <div className="wapper">
        <h2>Wapperr</h2>

      </div>

      {/*Footer*/}
      <FooterComponent />
       
    </div>
  );
}

export default App;
