import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./styles.css";
import "./components/stylesheets/layout.css";

import Navbar from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Errorpage from "./components/pages/Errorpage";

// import Login from "./components/pages/Login";
// import Register from "./components/pages/Register";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";

import Services from "./components/pages/services/Services";
import ServiceWebDev from "./components/pages/services/ServiceWebDev";
import ServiceAndroid from "./components/pages/services/ServiceAndroid";
import ServiceiOS from "./components/pages/services/ServiceiOS";
import Blog from "./components/pages/blog/Blog";
// import Comming from "./components/pages/Comming";

import Liferob from "./components/pages/Liferob";
import Team from "./components/pages/Team";
import Career from "./components/pages/career/Career";
import Work from "./components/pages/Work";

export default function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="main">
          <Routes>
            {/* <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} /> */}
            <Route path="/" exact element={<Home />} />
            <Route path="/services" exact element={<Services />} />
            <Route path="/blog" exact element={<Blog />} />
            <Route path="/liferob" exact element={<Liferob/>} />
            <Route path="/career" exact element={<Career />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact/>} />

            <Route path="/webdev" exact element={<ServiceWebDev />} />
            <Route path="/android" exact element={<ServiceAndroid />} />
            <Route path="/ios" exact element={<ServiceiOS />} />
            <Route path="/team" exact element={<Team />} />
            <Route path="/work" exact element={<Work />} />


            <Route path="*" element={<Errorpage />} />
          </Routes>
        </div>
        <Footer />
      </>
       {/* <>
      <Navbar />
      <div className="main">
       <Home/>
       </div>
       <Footer />
      </> */}
    </Router>
  );
}
