
function Card({ img, title, description }) {
  return (
  <div className="card">
    <h2 className="title">{title}</h2>
    <img src={img} className="img"/>
    <p className="description">{description}</p>
  </div>
  )
}

export default Card;