// import Intro from "./Intro";
// import Resume from "./Resume";
import Interest from "./Interest";
import Projects from "./Projects";
import Footer from "./Footer";
import myPiano from './assets/piano.jpeg'
import myAcrylic from './assets/acrylic.jpeg'
import myPonyo from './assets/Ponyo.jpeg'
import './App.css'
import Head from "./Head";

function Body(){
  const myHobbies = [
    { name: "Piano", img: myPiano, description: "[put a description]" },
    { name: "Acrylic Drawing", img: myAcrylic },
    { name: "Watching Shows", img: myPonyo },
  ];
  return (
    <>
      {/* <Intro name="Jennifer"/>
      <Resume /> */}
    <div className="grid-container">
      <div className="Head">
        <Head title="ABOUT ME"/> 
      </div>
        
      <div className="Projects">
        <Projects/>
      </div>

      <div className="colorContainer Interest">
        <Interest hobbies={myHobbies}/>
      </div>
      
      <div className="Footer">
        <Footer/>
      </div>
    </div>

    </>

  );
};

export default Body;