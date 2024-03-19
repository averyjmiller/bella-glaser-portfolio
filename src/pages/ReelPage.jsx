import reel from '../assets/bellamarieandrews.mp4';
import './ReelPage.css';

export default function ReelPage() {
  return (
    <div className='container' id="reel-wrapper">
      <div className="row">
        <div className="col-12">
          <h1>reel & media</h1>
        </div>
        <div className="col-12">
          <video controls id="reel">
            <source src={reel} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}