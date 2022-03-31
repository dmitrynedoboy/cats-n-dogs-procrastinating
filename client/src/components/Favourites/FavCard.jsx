import { useState } from 'react'
import { useLocation } from 'react-router-dom'

function FavCard(props) {
  const [currentAnimal, setCurrentAnimal] = useState(0)
  const { pathname } = useLocation()
  const { animal } = props;

  function handleClick(action) {
    switch (action) {
      case 'next': {
        if ((currentAnimal + 1) === animal.length) {
          setCurrentAnimal(0);
          break;
        } else setCurrentAnimal(currentAnimal + 1)
        break;
      }
      case 'prev': {
        if ((currentAnimal - 1) < 0) {
          setCurrentAnimal(animal.length - 1);
          break;
        } else setCurrentAnimal(currentAnimal - 1)
        break;
      }
      default: {
        return console.log('smth went wrong while changing fav');
      }
    }
  }

  return (
    <div className={pathname === '/profile' ? "card mb-3 container d-flex align-items-center profile" : "card mb-3 container d-flex align-items-center home"}>
      <div>
        <img src={animal.length > 0 ? animal[currentAnimal].url : undefined}
        className="card-img-top p-3"
        alt={animal.length > 0  ? "Awesome " +  animal[currentAnimal].type : undefined} />
        <p>{animal.length > 0  && animal[currentAnimal].comment}</p>
        {pathname === '/profile' ?
          <div>
            <button onClick={() => handleClick('prev')} type="button" className="btn btn-warning">⬅️ Prev fav</button>
            <button onClick={() => handleClick('next')} type="button" className="btn btn-warning">Next fav ➡️</button>
          </div>
          : null
        }
      </div>
    </div>
  );
}

export default FavCard;
