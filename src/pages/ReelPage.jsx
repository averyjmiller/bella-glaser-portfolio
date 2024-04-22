import reel from '../assets/bellamarieandrews.mp4';
import reel2 from '../assets/Bella-and-E.E.-Dream-Scene.mp4';
import thumbnail1 from '../assets/images/bellamarieandrews-thumbnail.png';
import thumbnail2 from '../assets/images/bellamarieandrews-thumbnail2.png';
import './ReelPage.css';

export default function ReelPage() {
  return (
    <div className='container' id="reel-wrapper">
      <div className="row">
        <div className="col-12">
          <h1>reels & media</h1>
        </div>
        <div className="col-12 text-center pt-4">
          <video poster={thumbnail1} controls id="reel">
            <source src={reel} type="video/mp4" />
          </video>
        </div>
        <div className="col-12 text-center py-4">
          <video poster={thumbnail2} controls id="reel">
            <source src={reel2} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}