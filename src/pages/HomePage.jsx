import placeholderimg from '../assets/images/placeholder-image.png';

export default function HomePage() {
  return (
    <div>
      <img className="homePageImg" src={placeholderimg} alt="Placeholder Image"/>
      <div className="d-flex justify-content-center" id="">
        <div className="d-flex justify-content-evenly" id="homebtn-wrapper">
          <button className="homebtns">Check me out!</button>
          <button className="homebtns">Let's get in touch!</button>
        </div>
      </div>
    </div>
  );
}