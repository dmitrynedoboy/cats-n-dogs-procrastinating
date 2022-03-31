import { useSelector } from 'react-redux'

function Picture(props) {
  const { card:animal } = useSelector(state => state)

  return (
    <div>
      <img src={animal.url} className="card-img-top p-3" alt={"Awesome " + animal.type} />
    </div>
  );
}

export default Picture;
