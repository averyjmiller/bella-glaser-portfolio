import headshot from '../assets/images/headshots/bellamarieandrews(3).jpg';
import resumeImg from '../assets/images/AS24_Resume_3 (dragged).jpg';
import resumePDF from '../assets/AS24_Resume_3 (dragged).pdf';
import './ResumePage.css';

export default function ResumePage() {
  return (
    <div className='container' id="resume-wrapper">
      <div className="row">
        <div className="col-12 col-md-6">
          <img src={headshot} alt="bellamarieandrews" id="resume-headshot"></img>
        </div>
        <div className="col-12 col-md-6">
          <embed src={resumeImg} alt="resume" id="resume"/>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-between flex-wrap" id="homebtn-wrapper">
          <a href={headshot} target="_blank" download="bellamarieandrews" className="homebtns">Download Headshot</a>
          <a href={resumePDF} target="_blank" download="bellamarieandrews_resume" className="homebtns">Download Resume</a>
        </div>
      </div>
    </div>
  );
}