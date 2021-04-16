import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import hamburger from '../assets/icons/hamburger.svg';
import close from '../assets/icons/close.svg';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative flex items-center justify-between p-8 pb-10">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <img
        src={showMenu ? close : hamburger}
        alt="hamburger menu"
        className={`${showMenu ? 'w-5 h-5' : 'w-6 h-3'}`}
        onClick={() => setShowMenu((showMenu) => !showMenu)}
      />
      {showMenu && (
        <div className="absolute w-56 py-10 text-center text-white top-20 bg-gray-dark-blue right-8 btn-label">
          <h1 className="mb-8" onClick={() => setShowMenu(false)}>
            <Link to="/">HOME</Link>
          </h1>
          <h1 className="mb-8" onClick={() => setShowMenu(false)}>
            <Link to="/portfolio">PORTFOLIO</Link>
          </h1>
          <h1 onClick={() => setShowMenu(false)}>
            <Link to="/contact">CONTACT ME</Link>
          </h1>
        </div>
      )}
    </div>
  );
}
