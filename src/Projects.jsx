import MyGallery from "./Gallery";
import Heading from "./Heading";
import myImage1 from './assets/videogame.png';
import myImage2 from './assets/homescreen.png';
import myImage3 from './assets/losescreen.png';
import braille from './assets/braille.jpg';
import originalText from './assets/originaltxt.png';
import encodedText from './assets/encodedtxt.png';


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
    original: originalText,
    thumbnail: originalText,
    description: "Before: Original Text",
    // link: "https://github.com/JenniferW21/EncryptionProject_JenniferWang/tree/main/EncryptionProject"
  },
  {
    original: encodedText,
    thumbnail: encodedText,
    description: "After: Substitution, String Manipulation, Round Robbin Shift",
  },

  {
    original: braille,
    thumbnail: braille,
    description: "Substitution: Braille Character"
    
  },
];

function Projects() {
  return (
    <>      
      <Heading type="blue" title="Projects"/>
      <div className="container">
        
        <div className="flex-container">
          <span>
            <h3>9th Grade: Video game</h3>
            <MyGallery images={project1} />
          </span>
          <span>
            <h3>11th Grade: Secret Decoder Ring</h3>
            <MyGallery images={project2} />
          </span>
        </div>
      </div>
    </>
  )
}
export default Projects;