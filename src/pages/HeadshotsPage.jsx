import Headshot from '../components/Headshot';
import headshots from '../js/headshots';
import './HeadshotsPage.css';

export default function HeadshotsPage() {
  return (
    <>
      <Headshot headshots={headshots} />
    </>
  );
}