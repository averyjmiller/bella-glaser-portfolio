import { Link, useLocation } from 'react-router-dom';
import Navbar from './UI/Navbar';
import './Navigation.css'

export default function Navigation() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Navbar
      links={[
        <Link key={1} to='./about' className={pathname == "/about" ? 'selected-nav' : ''}>
          About
        </Link>,
        <Link key={2} to='./reel' className={pathname == "/reel" ? 'selected-nav' : ''}>
          Reel
        </Link>,
        <Link key={3} to='./resume' className={pathname == "/resume" ? 'selected-nav' : ''}>
          Resume
        </Link>,
        <Link key={4} to='./headshots' className={pathname == "/headshots" ? 'selected-nav' : ''}>
          Headshots
        </Link>,
        <Link key={5} to='./contact' className={pathname == "/contact" ? 'selected-nav' : ''}>
          Contact
        </Link>
      ]}
    />
  );
}