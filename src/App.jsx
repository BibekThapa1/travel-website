import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PlaceDetail from "./pages/PlaceDetail"
import PlacesPage from "./pages/PlacesPage";
import About from "./components/About";
import Loader from "./components/Loader";
import SearchResultPage from "./pages/SearchResultPage";
import PlaceInfo from "./components/PlaceInfo";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/places" element={<PlacesPage/>} />
      <Route path="/places/betana" element={<PlaceDetail/>} />
      <Route path="/search-results" element={<SearchResultPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
