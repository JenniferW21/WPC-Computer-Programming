import Head from "./Head";
import Body from "./Body";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}



function App() {
  return (
    <>
      <BrowserRouter>     
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

