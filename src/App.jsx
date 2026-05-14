import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Body from "./Body";
import Home from "./Home";
import './App.css'



function App() {
  return (
    <>
      <BrowserRouter basename="/WPC_Programming">       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/body" element={<Body />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
};


export default App;

