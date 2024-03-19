import { InstagramEmbed } from 'react-social-media-embed';
import headshot from '../assets/images/bellamarieandrews.jpeg';
import './AboutPage.css'

export default function AboutPage() {
  return (
    <div className='container' id="about-wrapper">
      <img src={headshot} alt="bellamarieandrews" id="about-headshot" />
      <div className="row">
        <div className="col py-5">
          <h1>Bella Marie Andrews</h1>
          <p id="about-paragraph">
            I’ll keep it short and concise, just like me :)
            <br/> 
            Born in Westerville, Ohio. LA Based.
            <br/>
            Los Angeles local hire.
            <br/>
            Graduating from California Institute of the Arts with a BFA in Acting 
            Actor, Singer, Rollerskater, Painter, Daydreamer :) 
            <br/>
            I’ve been told I’m too stubborn for my own good, but I believe my stubbornness and ambition for a greater tomorrow is my reason why I am still here 
            <br/>
            <span id="catch">Everyday is a new reason to play and explore the unknown!</span>
          </p>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col">
          <p>Get to know me more on Instragram!</p>
          <InstagramEmbed url="https://www.instagram.com/bellamarieandrews/" width={328} />
        </div>
      </div>
    </div>
  );
}