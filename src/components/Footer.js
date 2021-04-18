import logoWhite from '../assets/logo-white.svg';
import twitter from '../assets/icons/twitter.svg';
import linkedin from '../assets/icons/linkedin.svg';
import github from '../assets/icons/github.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="text-center pt-14 pb-14 bg-gray-dark-blue sm:py-6 sm:px-10 sm:flex sm:items-center sm:justify-between">
      <div className="sm:flex sm:items-center">
        <img
          src={logoWhite}
          alt="logo"
          className="h-8 mx-auto w-15 sm:ml-0 sm:mr-12"
        />
        <button className="block pt-10 mx-auto text-white btn-label sm:pt-0 sm:mr-10">
          <Link to="/">HOME</Link>
        </button>
        <button className="block pt-8 mx-auto text-white btn-label sm:pt-0 sm:mr-10">
          <Link to="/portfolio">PORTFOLIO</Link>
        </button>
        <button className="block pt-8 mx-auto text-white btn-label sm:pt-0 sm:mr-10">
          <Link to="/contact">CONTACT ME</Link>
        </button>
      </div>

      <div className="inline-flex pt-10 space-x-4 sm:pt-0">
        <img src={github} alt="github logo" />
        <img src={twitter} alt="twitter logo" />
        <img src={linkedin} alt="linkedin logo" />
      </div>
    </div>
  );
}
