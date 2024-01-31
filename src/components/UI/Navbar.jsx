import Hamburger from './Hamburger';
import { useState } from 'react';

export default function Nav({ links }) {

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  };

  let navStyle = {
    background: '#234133b3',
    padding: '5px',
    borderRadius: '5px',
    display: hamburgerOpen ? 'inline': 'none'
  };  

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
      <div id="nav-items">
        <div id="nav-pages" style={navStyle}>
          {links.map((link) => link)}
        </div>
      </div>
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger />
      </div>
    </nav>
  );
}