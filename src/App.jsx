import Banner2 from "./components/banner2";
import DeliveryBar from "./components/DeliveryBar";
import Footer from "./components/Footer";
import Applications from "./components/pages/Applications";
import Explore from "./components/pages/Explore1";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Support2 from "./components/pages/Support2";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <div className="max-h-screen w-full">
        <div id="home">
          <Home />
        </div>
        <div id="applications">
          <Applications />
        </div>
        <DeliveryBar />
        <div id="products">
          <Products />
        </div>
        <div id="support">
          <Support2 />
        </div>
        <div id="explore">
          <Explore />
        </div>
        <Banner2 />
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
}

export default App;
