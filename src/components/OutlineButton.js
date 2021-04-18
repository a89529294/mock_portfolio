import { Link } from 'react-router-dom';

export default function OutlineButton({
  label,
  center = false,
  linkURL,
  width = 'w-52',
}) {
  return (
    <div
      className={`flex items-center justify-center h-12 border border-solid ${width} border-gray-dark-blue ${
        center ? 'mx-auto' : ''
      }`}
    >
      <span className="text-gray-dark-blue btn-label">
        <Link to={linkURL}>{label}</Link>
      </span>
    </div>
  );
}
