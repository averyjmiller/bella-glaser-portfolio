import { InstagramEmbed } from 'react-social-media-embed';
import './AboutPage.css'

export default function AboutPage() {
  return (
    <div className='container' id="about-wrapper">
      <div className="row">
        <div className="col">
          <InstagramEmbed url="https://www.instagram.com/bellamarieandrews/" width={328} />
        </div>
      </div>
    </div>
  );
}