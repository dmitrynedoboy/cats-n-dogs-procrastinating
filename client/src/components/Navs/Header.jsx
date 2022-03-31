import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Home</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/cat">Cats</Link>
            <Link className="nav-link" to="/dog">Dogs</Link>
            <Link className="nav-link" to="/profile">Profile</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
