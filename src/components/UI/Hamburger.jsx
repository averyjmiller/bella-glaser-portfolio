import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Hamburger() {
  return(
    <div>
      <div id="hamburger-icon">
        <div id="open">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div id="close">
          <FontAwesomeIcon icon={faXmark} />
        </div>  
      </div>
    </div>
  );
}