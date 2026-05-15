const styles = {

    black: { 
      color:"#051319", 
      fontSize:"30px", 
      padding:"100px",
      },

    blue: { 
      fontSize:"25px", 
      paddingLeft: "70px",
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