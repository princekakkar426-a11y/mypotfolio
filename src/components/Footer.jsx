import { profile } from '../data/content';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          Made with <span className="footer-heart">❤️</span> by {profile.name}
        </p>
        <p className="footer-copy">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
