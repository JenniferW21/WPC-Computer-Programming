const styles = {

    black: { 
      color:"#051319", 
      fontSize:"30px", 
      padding:"100px",
      },

    blue: { 
      // backgroundColor: 'rgb(91, 131, 171)', 
      fontSize:"25px", 
      padding:"20px",
      textAlign: "left",
      },
  };

function Heading({ type, title }) { 
  return (
    <>
      <div style={styles[type]}>
        <h2>{title}</h2>
      </div>
    </>

  );
}

export default Heading;