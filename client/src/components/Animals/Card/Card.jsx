import Buttons from "./Buttons";
import Picture from "./Picture";

function Card(props) {
  return (
    <div className="card mb-3 container">
      <Picture />
      <div className="card-body">
        <Buttons />
      </div>
    </div>
  );
}

export default Card;
