export default function Nav({ links }) {
  return (
    <nav>
      <header>
        <div id="name">
          Bella Marie Andrews
        </div>
        <div id="profession">
          Actor/Artist
        </div>
      </header>
      <div id="nav-items">
        <div id="nav-pages">
          {links.map((link) => link)}
        </div>
      </div>
    </nav>
  );
}