import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
// images

import Logo from "./assets/svg/Logo.svg";

// links

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <header className="main_container">
        <BrowserRouter>
          <nav class="header__nav">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </header>
    </>
  );
}

export default App;
