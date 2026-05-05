import MyGallery from "./Gallery";
import Heading from "./Heading";
import myImage1 from './assets/videogame.png';
import myImage2 from './assets/homescreen.png';
import myImage3 from './assets/losescreen.png';
import braille from './assets/braille.jpg'
//project 1
const project1 = [
  {
    original: myImage2,
    thumbnail: myImage2,
    description: "Python: Video Game"
  },
  {
    original: myImage1,
    thumbnail: myImage1,
    description: "Goal: Collect Food",
  },
  {
    original: myImage3,
    thumbnail: myImage3,
    description: "Lose: Health runs out"
    
  },

];

//project 2
const project2 = [
  {
    original: null,
    thumbnail: null,
    description: "Greta Thunberg is a Swedish activist that spreads awareness to fight climate. She not only makes speeches, but she is vegan, she composts, and she only travels by boat and train. Thunberg does make a difference by using her words to explain the dangers of climate change, however, her audience will save the world more effectively when they follow her actions."
  },
  {
    original: myImage1,
    thumbnail: myImage1,
    description: "Goal: Collect Food",
  },

  {
    original: braille,
    thumbnail: braille,
    description: "Substitution"
    
  },
];

function Projects() {
  return (
    <>      
      <Heading type="blue" title="Projects"/>

      <div className="flex-container">
        <MyGallery images={project1} />
        <MyGallery images={project2} />

        {/* Project 2: Encryption */}
        <span> 
          <a href="https://github.com/JenniferW21/EncryptionProject_JenniferWang/tree/main/EncryptionProject" target="_blank">
            <h3>11th: Secret Decoder Ringer</h3>
          </a>
          <p>The Secret Decoder Ring Project is to encrypt and decrypt a text message.</p>
          <ol>
            <li>String Manipulation: Reverse the text</li>
            <li>Substitution: Braille characters</li>
            <li>Round Robin Shift: ASCII shifting</li>
          </ol>
        </span>

      </div>
    </>
  )
}
export default Projects;