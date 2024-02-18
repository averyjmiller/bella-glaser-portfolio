export default function Headshot({ headshots }) {
  return (
    <div className="container" id="headshot-wrapper">
      <div className="row">
        {headshots.map((headshot, index) => (
          <div className="col-6 col-md-4" key={index}>
            <img src={`${headshot}`} className="headshot" alt='bellamarieandrews' />
          </div>
        ))}
      </div>
    </div>
  );
}