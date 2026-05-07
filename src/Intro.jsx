import './App.css'
import Heading from "./Heading";

function Intro(props){
  return (
    <div>
      <Heading type="blue" title="Introduction"/>
      <h4>Hi, my name is {props.name}! I am a junior in the Computer Programming and Web Design CTE.</h4>
    </div>
  );
}

export default Intro;