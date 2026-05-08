import Card from "./Card"
import Heading from "./Heading"
function Interest({hobbies}) {

  return (
    <>
      <Heading type="blue" title="Interest & Hobbies"/>
    <div className="flex-container" style={{ paddingBottom: "40px"}}>
      <div className="container">
        {hobbies.map((hobby, index) => (
          <Card 
            key={index} 
            title={hobby.name}
            img={hobby.img}  
            description={hobby.description}
          />
        ))}
      </div>
          
    </div>
    </>
  );
}



export default Interest;