import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { initCardFromApi } from '../../redux/actions/card.actions';
import { DOGS_PATH } from "../../utils/animals.path";
import Card from "./Card/Card";

function Dogs(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initCardFromApi(DOGS_PATH))
  }, [])

  return (
    <div className="container my-5">
      <Card />
    </div>
  );
}

export default Dogs;
