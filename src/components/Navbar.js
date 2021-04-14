import logo from '../assets/logo.svg';
import hamburger from '../assets/icons/hamburger.svg';

export default function Navbar() {
  return (
    <div className="flex items-center justify-between mb-10">
      <img src={logo} alt="logo" />
      <img src={hamburger} alt="hamburger menu" className="w-6 h-3" />
    </div>
  );
}
