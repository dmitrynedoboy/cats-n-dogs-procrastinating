import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initCardFromApi } from '../../../redux/actions/card.actions';
import { addFavAnimal } from '../../../redux/actions/animal.actions';

function Buttons(props) {
  const dispatch = useDispatch()
  const [comment, setComment] = useState()
  const { pathname: animalPath } = useLocation()
  const { card: animal } = useSelector(state => state)

  function handleClick({target}) {
    const { dataset: { type } } = target;
    switch(type) {
      case 'like': {
        const favAnimal = {...animal, comment}
        setComment('')
        dispatch(addFavAnimal(favAnimal))
        break;
      }
      case 'next': {
        break;
      }
      default: {
        return console.log('Smth went wrong');
      }
    }
    dispatch(initCardFromApi(animalPath.slice(1,4)))
  }

  return (
    <>
      <div className="mb-3">
        <label htmlFor="comment" className="form-label">Enter your comment here:</label>
        <input value={comment} onChange={({target}) => setComment(target.value)} name="comment" type="text" className="form-control" />
      </div>
      <div className="d-flex flex-row my-2 justify-content-center">
        <button onClick={handleClick} data-type="like" type="button" className="btn btn-success m-3" >🤩</button>
        <button onClick={handleClick} data-type="next" type="button" className="btn btn-danger m-3">⏭️</button>
      </div>
    </>
  );
}

export default Buttons;
