export default function Header() {
  return (
    <header className="header">
        <img src="img/xuperman-logo.png" className="logo" />
      <div className="logo-title">
        <h1>Xuxin's Fan Hub</h1>
      </div>

      <nav className="nav">
        <a href="#intro">Home</a>
        <a href="#highlights">Career Highlights</a>
        <a href="#gallery">Gallery</a>
        <a href="#community">Community</a>
      </nav>
    </header>
  );
}
