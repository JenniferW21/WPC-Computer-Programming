// import Intro from "./Intro";
// import Resume from "./Resume";
import Interest from "./Interest";
import Projects from "./Projects";
import Footer from "./Footer";
import myPiano from './assets/piano.jpeg'
import myAcrylic from './assets/acrylic.jpeg'
import myPonyo from './assets/Ponyo.jpeg'
import './App.css'

function Body(){
  const myHobbies = [
    { name: "Piano", img: myPiano, description: "[put a description]" },
    { name: "Acrylic Drawing", img: myAcrylic },
    { name: "Watching Shows", img: myPonyo },
  ];
  return (
    <>
    <div>
      {/* <Intro name="Jennifer"/>
      <Resume /> */}
      <Projects />
      <div className="colorContainer">
        <Interest hobbies={myHobbies}/>
      </div>
      
    </div>

    <div>
      <Footer />
    </div>
    </>

  );
};

export default Body;