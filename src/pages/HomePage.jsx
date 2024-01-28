import homepageHeadshot from '../assets/images/homepage-headshot.jpg';

export default function HomePage() {
  return (
    <div>
      <img className="homePageImg" src={homepageHeadshot} alt="Placeholder Image"/>
      <p id="quote">"dare to live in the <br/>unknown"</p>
      <div className="d-flex justify-content-center" id="">
        <div className="d-flex justify-content-between" id="homebtn-wrapper">
          <button className="homebtns">Learn all about me!</button>
          <button className="homebtns">Let's get in touch!</button>
        </div>
      </div>
    </div>
  );
}