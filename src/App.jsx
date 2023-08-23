import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Diensten, OverOns, Blogs, Contact } from "./MassiveWebsite/scenes"
import { CMS, Ecommerce, Seo, Sea, Strategie, Website } from "./MassiveWebsite/scenes/diensten";

// import Home from "./MassiveWebsite/scenes/home/Home"

const App = () => {
  return (
    <Router>
      <Routes>

        {/* Massive Website */}
        <Route exact path="/" element={<Home />} />
        <Route path="/diensten" element={<Diensten />} />
          <Route exact path="/diensten/seo-uitbesteden" element={<Seo />} />
            <Route />

          <Route path="/diensten/sea-uitbesteden" element={<Sea />} />


          <Route path="/diensten/website-laten-maken" element={<Website />} />


          <Route path="/diensten/webshop-laten-maken" element={<Ecommerce />} />


          <Route path="/diensten/online-marketing-strategie" element={<Strategie />} />


          <Route path="/diensten/cms" element={<CMS />} />

        <Route path="/over-ons" element={<OverOns />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />


        {/* SERP */}


      </Routes>
    </Router>
  );
};

export default App;
