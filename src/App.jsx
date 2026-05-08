import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Head from "./Head";
import Body from "./Body";
import './App.css'
import Home from "./Home";



function App() {
  return (
    <>
      <BrowserRouter basename="/WPC_Programming">     
        <Head/> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/body" element={<Body />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
};


export default App;

