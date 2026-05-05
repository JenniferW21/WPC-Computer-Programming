const styles = {

    black: { 
      backgroundColor: 'rgb(22, 28, 46)', 
      color:"rgb(230, 229, 218)", 
      fontSize:"30px", 
      padding:"20px",
      border: "5px solid rgb(22,28,46)"},

    blue: { 
      backgroundColor: 'rgb(91, 131, 171)', 
      fontSize:"25px", 
      padding:"5px",
      border: "5px solid rgb(91, 131, 171)"},
  };

function Heading({ type, title }) {
  return <div style={styles[type]}><h2>{title}</h2></div>;
}

export default Heading;