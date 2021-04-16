import downArrow from '../assets/icons/down-arrows.svg';

export default function SolidButton({
  label,
  showImage = false,
  callback = () => {},
  className,
}) {
  return (
    <button
      className={`flex h-12 bg-dark-blue w-52 ${className}`}
      onClick={callback}
    >
      {showImage && (
        <div className="flex items-center justify-center w-12 h-12 bg-black bg-opacity-10">
          <img src={downArrow} alt="down-arrow" />
        </div>
      )}

      <div className="flex items-center justify-center flex-grow h-full">
        <span className="text-white btn-label">{label}</span>
      </div>
    </button>
  );
}
