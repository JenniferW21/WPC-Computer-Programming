import Button from "./Button";
import myResume from './assets/Resume.pdf'

const myStyle ={
    padding:"10px"
}
function Resume(){
  return (
    <>
    <div style={myStyle} className="heading">
      <Button fileName={myResume} label="Download Resume" />
    </div>
    </>
  );
};
export default Resume;