import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import FavCard from '../Favourites/FavCard';

function Profile(props) {
  const { cats, dogs }  = useSelector(state => state)

  return (
    <div className="d-flex align-items-center justify-content-around">
      <div className="container my-3 row">
        <div className="container my-5 col-6 text-center">
          <h3>Here is you favourite cats:</h3>
          <FavCard key={uuid()} animal={cats}/>
        </div>
        <div className="container my-5 col-6 text-center">
          <h3>Here is you favourite dogs:</h3>
          <FavCard key={uuid()} animal={dogs}/>
        </div>
      </div>
    </div>
  );
}

export default Profile;
