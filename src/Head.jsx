import Heading from "./Heading";
import Nav from "./Nav";
import './App.css'


function Head({title}){
  return (
    <div className="gradient"> 
      <Nav />
      <Heading type="black" title={title}/>
    </div>
  )
}

export default Head;