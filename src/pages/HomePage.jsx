import homepageHeadshot from '../assets/images/homepage-headshot.jpg';
import './HomePage.css';

export default function HomePage() {
  return (
    <div>
      <img className="homePageImg" src={homepageHeadshot} alt="Placeholder Image"/>
      <p id="quote">dare to live in the unknown.</p>
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-between flex-wrap" id="homebtn-wrapper">
          <a href="./about" className="homebtns">all about me!</a>
          <a href="./contact" className="homebtns">get in touch!</a>
        </div>
      </div>
    </div>
  );
}