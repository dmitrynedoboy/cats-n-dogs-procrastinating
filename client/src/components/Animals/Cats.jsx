import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { initCardFromApi, initCard } from '../../redux/actions/card.actions';
import { CATS_PATH } from "../../utils/animals.path";
import Card from "./Card/Card";

function Cats(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initCardFromApi(CATS_PATH))
  }, [])

  return (
    <div className="container my-5">
      <Card />
    </div>
  );
}

export default Cats;
