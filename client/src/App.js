import React from "react";
import { Home } from "./Components/Home/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Classes } from "./Components/Classes/Classes";
import { Class } from "./Components/Classes/Class";
import { Pricing } from "./Components/Pricing/Pricing";
import { Membership } from "./Components/Pricing/Membership";


function App() {
 
  return (
    <div >
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/classes" element={<Classes />} />
          <Route exact path="/class/:title" element={<Class />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/membership" element={<Membership />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
