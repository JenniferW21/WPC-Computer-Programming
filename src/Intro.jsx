import './App.css'
import Heading from "./Heading";

function Intro(props){
  return (
    <div >
      <Heading type="blue" title="Introduction"/>
      <div className="container">
        <p>
          Hi, my name is {props.name}! I'm currently a junior at Bayside High School and I am a part of the Computer Programming and Web Design CTE. Some AP's I've taken or currently taking are  AP Comp Sci A, Bio, and Precalc, Lang, and APUSH. When I'm not coding or studying, I'm usually drawing, playing the piano, or hanging out with my two sisters. My favorite color is blue and I LOVE cats. Currently I am reading the book, 'The Institute' by Stephen King; I really want to read 'Misery' by Stephen King!
        </p>
        
        <p>
          My future goal is to become a math professor or just teach Math in general. I've found that I have a passion for teaching when I started working at an after-school program where I have taught or assisted students from K-5. To build that passion, I started privately tutoring one-on-one geometry. Overall, I want to teach and learn more about Math.
        </p>
      </div>
    </div>
  );
}

export default Intro;