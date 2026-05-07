function Button({ fileName, label, onClick}){
  const style={
    backgroundColor: "#2D3A6E",
    border:"1px solid #051319",
    color: "white",
    padding: "15px 32px",
    textDecoration: "none",
    display: "inline-block",
    boxShadow: "0 2px 2px #2D3A6E",
    cursor: "pointer",
    borderRadius: "4px",
  }


 
  if(fileName){
    return (
        <a href={fileName} download style={style}>{label}</a>
    );
  }
    return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
    );
  }



export default Button;