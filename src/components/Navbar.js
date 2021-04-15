import logo from '../assets/logo.svg';
import hamburger from '../assets/icons/hamburger.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-8 pb-10">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <img src={hamburger} alt="hamburger menu" className="w-6 h-3" />
    </div>
  );
}
