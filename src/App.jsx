//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

const myStyle ={
    backgroundColor: "lightblue", 
    padding:"20px"
}

function Head(){
  return (
    <div className="container" style={myStyle}> 
      <h1 className="heading">ABOUT ME</h1>
    </div>
  )
}
function Intro(props){
  return (
    <div className="container">
      <h1 className="heading">Introduction</h1>
      <p>Hi, my name is {props.name}!</p>
    </div>
  );
}

const Hobbies = ["Piano", "watching shows","Drawing",];

function Interest(props){
  return (
    <div className="container">
      <h1 className="heading">Interest & Hobbies</h1>
      <ul>
        <li> {props.hobbies[0]}</li>
        <li> {props.hobbies[1]}</li>
        <li> {props.hobbies[2]}</li>
      </ul>
    </div>
  );
}

function Projects(){
  return (
    <>
    <div className="container">
      <h1 className="heading" >Project</h1>
    </div>
    <div className="flex-container">
      <span> <p>9th: Video Game</p> </span>
      <span> <p>11th: Secret Decoder Ringer</p> </span>
    </div>
    </>
  );
}

function Footer(){
  return (
    <div className="container">
      <p>Jennifer Wang | WPC Computer Programming | April 2026</p>
    </div>
  )
}

//Parent
function Body(){
  return (
    <>
    <div>
      <Intro name="Jenn"/>
      <Projects />
      <Interest hobbies={Hobbies}/>
    </div>
    <div>
      <Footer />
    </div>
    </>

  );
}






function App() {
  return (
    <>
      <Head/>
      <Body /> 
    </>
  );
}



export default App;

