//Libraries imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components Imports
import Navbar from "./components/Navbar";

//Pages imports
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

const App = () => {
  return (
    <Router>
      <>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/products" element={<Products />}></Route>
          </Routes>
        </div>
      </>
    </Router>
  );
};

export default App;
