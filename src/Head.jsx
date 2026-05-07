import Heading from "./Heading";
import Nav from "./Nav";
import './App.css'


function Head(){
  return (
    <div className="gradient"> 
      <Nav />
      <Heading type="black" title="ABOUT ME"/>
    </div>
  )
}

export default Head;