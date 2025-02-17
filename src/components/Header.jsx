const Header = ({ appTitle = "" }) => {
  return (
    <div className="header">
      <h1 className="appTitle">{appTitle}</h1>
    </div>
  );
};

export default Header;
