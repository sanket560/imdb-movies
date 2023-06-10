import './Card.css'

function Card(props) {
  const {Poster , Title , Year } = props
  return (
    <div className='card'>
      <div className='img'>
        <img src={Poster} alt='' />
      </div>
      <div className='details'>
        <p>
          <span>Title : </span>
          {Title}
        </p>
        <p>
          <span>Year : </span>
          {Year}
        </p>
      </div>
    </div>
  );
}

export default Card