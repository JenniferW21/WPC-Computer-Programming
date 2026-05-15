import Intro from "./Intro";
import Resume from "./Resume";
import Head from "./Head";
import Footer from "./Footer";
import Heading from "./Heading";
import myResume from "./assets/Resume.pdf";

function Home() {
  return(

    <div>
      <Head title="HOME PAGE"/> 
        <Intro name="Jennifer"/>
        <Resume />
        <Heading type="blue" title="Resume"/>
          <embed src={myResume} type="application/pdf"width="80%"height="800px"/>
        <Footer />
    </div> 
    
  );
} 

export default Home;