function Button({ type, fileName, label, onClick}){
  const style={
    border:"1px solid rgb(22, 28, 46)",
    color: "white",
    padding: "15px 32px",
    textDecoration: "none",
    display: "inline-block",
    boxShadow: "5px 5px rgb(22, 28, 46)",
    cursor: "pointer"
  }

  const buttoncolor = {
    blue: { backgroundColor: "rgb(91, 131, 171)" },
    lightblue: { backgroundColor: "rgb(164, 186, 208)" }
  };


  const buttonstyle = { ...style, ...buttoncolor[type] };

 
  if(fileName){
    return (
        <a href={fileName} download style={buttonstyle}>{label}</a>
    );
  }
    return (
    <button onClick={onClick} style={buttonstyle}>
      {label}
    </button>
    );
  }



export default Button;