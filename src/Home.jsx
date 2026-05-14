import Intro from "./Intro";
import Resume from "./Resume";
import Head from "./Head";
import Footer from "./Footer";
import resumeFile from "./assets/Resume.pdf";

function Home() {
  return(

    <div>
      <Head title="HOME PAGE"/> 
        <Intro name="Jennifer"/>
        <Resume />
        
        <div>
          <object data={resumeFile} type="application/pdf" width="100%"height="100%">
            <iframe src={resumeFile} width="100%"height="100%"style={{ border: "none" }}title="PDF Document">
              <p>
                Your browser does not support PDF viewing.{" "}
                <a href={resumeFile}>Download the PDF</a>.
              </p>
            </iframe>
          </object>
        </div>
        <Footer />
    </div> 
    
  );
} 

export default Home;