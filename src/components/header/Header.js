import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Got DB</div>
      <nav className="nav">
        <div className="nav__item persons">Persons</div>
        <div className="nav__item houses">Houses</div>
        <div className="nav__item books">Books</div>
      </nav>
    </div>
  );
};

export default Header;
