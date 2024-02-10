import Hamburger from './Hamburger';
// import { useState } from 'react';
import hamburgerHandler from '../../js/hamburger';

export default function Nav({ links }) {

  // const [hamburgerOpen, setHamburgerOpen] = useState(false);

  // const toggleHamburger = () => {
  //   setHamburgerOpen(!hamburgerOpen)
  // };

  // let navStyle;

  // if(hamburgerOpen) {
  //   navStyle = {
  //     background: '#234133b3',
  //     padding: '5px',
  //     borderRadius: '5px',
  //     display: 'flex',
  //     flexDirection: 'column'
  //   }
  // } else {
  //   navStyle = {
  //     background: '#234133b3',
  //     padding: '5px',
  //     borderRadius: '5px',
  //   }
  // }

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
        <div id="nav-pages">
          {links.map((link) => link)}
        </div>
      </div>
      <div className="hamburger" onClick={hamburgerHandler}>
        <Hamburger />
      </div>
    </nav>
  );
}