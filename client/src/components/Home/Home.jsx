import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FavCard from '../Favourites/FavCard';
import { getAnimalFromApi } from '../../redux/actions/card.actions';
import { CATS_PATH, DOGS_PATH } from "../../utils/animals.path";



function Home(props) {
  const [cat, setCat] = useState();
  const [dog, setDog] = useState();

  useEffect(() => {
    getAnimalFromApi(CATS_PATH)
      .then(([cat]) => setCat({ url:cat.url, type: 'cat' }));
    getAnimalFromApi(DOGS_PATH)
      .then(([dog]) => setDog({ url:dog.url, type: 'dog' }));
  }, [])

  return (
    <div className="d-flex align-items-center justify-content-around">
      <div className="container my-3 row">
        <h3 className="text-center">Choose your fighter:</h3>
        <div className="container my-5 col-6 text-center">
        <Link to="/cat">
          {cat && <FavCard animal={[cat]} />}
          GO CATS GO
        </Link>
        </div>
        <div className="container my-5 col-6 text-center">
        <Link to="/dog">
          {dog && <FavCard animal={[dog]} />}
          YO DAWG
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
