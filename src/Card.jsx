import './Card.css'

function Card({ img, title, description }) {
  return (
      <div className="card-container">
        <div className="card-inner">

          <div className="card-front">
            <h2 className="title">{title}</h2>
            <img src={img} className="img" alt={title} />
          </div>

          <div className="card-back">
            <p className="description">{description}</p>
          </div>
        </div>

    </div>
  )
}

export default Card;