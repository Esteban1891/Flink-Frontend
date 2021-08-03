import "./style.scss";

function NavBar({ data }) {
  return (
    <nav className="nav">
      <div className="nav-wrap">
        <img
          src="https://www.credilemon.com/img/logo/flink.png"
          className="nav__logo"
        />

        <p className="nav-wrap__companies">Empresas: { data.length }</p>
      </div>
    </nav>
  );
}

export default NavBar;
