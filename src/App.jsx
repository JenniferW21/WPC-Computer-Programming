import Head from "./Head";
import Body from "./Body";
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function Home() {
  return <h1>Home Page</h1>;
}



function App() {
  return (
    <>
    <Head/>
    <BrowserRouter>
     <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/body">About Me</Link>
        </li>
      </ul>  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/body" element={<Body />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
};


export default App;

