import Hamburger from './Hamburger';
import hamburgerHandler from '../../js/hamburger';

export default function Nav({ links }) {
  return (
    <nav>
      <header>
        <a href="./" id="nav-header">
          <div id="name">
            Bella Marie Andrews
          </div>
          <div id="profession">
            Actor/Artist
          </div>
        </a>
      </header>
      <div className="slide-out" id="nav-items">
        <div id="nav-pages" onClick={hamburgerHandler}>
          {links.map((link) => link)}
        </div>
      </div>
      <div className="hamburger" onClick={hamburgerHandler}>
        <Hamburger />
      </div>
    </nav>
  );
}