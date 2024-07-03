import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import PlaceInfo from "./components/PlaceInfo";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <PlaceInfo/>
      <Footer />
    </>
  );
}

export default App;
