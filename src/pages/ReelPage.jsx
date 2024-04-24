import reel from '../assets/bellamarieandrews.mp4';
import thumbnail1 from '../assets/images/bellamarieandrews-thumbnail.png';
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
          <iframe id="reel" 
            src="https://www.youtube.com/embed/4z5y0Li3tZw?si=WBUjblKdqxgJCnJT" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
  );
}