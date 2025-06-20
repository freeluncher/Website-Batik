import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Landing = lazy(() => import("./pages/Landing"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div style={{textAlign:'center',margin:'2rem'}}>Memuat halaman...</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/katalog" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
