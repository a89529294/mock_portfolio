import { useState } from 'react';

export default function MyInput({
  label,
  placeholder,
  useTextArea = false,
  state,
  setState,
  mt = 'mt-6',
}) {
  const [errorState, setErrorState] = useState(false);

  const handleInputBlur = (e) => {
    if (state === '') {
      setErrorState(true);
    } else {
      setErrorState(false);
    }
  };

  return (
    <div>
      <label
        htmlFor={label}
        className={`block ${mt} mb-2 font-bold text-sectionTag text-gray-dark-blue text-opacity-80`}
      >
        {label}
      </label>
      {useTextArea ? (
        <textarea
          id={label}
          className={`block w-full h-24 px-4 py-2 outline-none resize-none focus:ring-1 focus:ring-desaturated-cyan input bg-light-gray placeholder-opacity-40 placeholder-gray-dark-blue ${
            errorState ? 'ring-1 ring-bright-red' : ''
          }`}
          placeholder={placeholder}
          autoComplete="off"
          value={state}
          onChange={setState}
          onBlur={handleInputBlur}
          onFocus={() => setErrorState(false)}
        />
      ) : (
        <input
          id={label}
          className={`w-full h-12 px-4 py-2 outline-none focus:ring-1 focus:ring-desaturated-cyan input bg-light-gray placeholder-opacity-40 placeholder-gray-dark-blue ${
            errorState ? 'ring-1 ring-bright-red' : ''
          }`}
          placeholder={placeholder}
          autoComplete="off"
          value={state}
          onChange={setState}
          onBlur={handleInputBlur}
          onFocus={() => setErrorState(false)}
        />
      )}
      <span
        className={`mt-1 font-normal text-inputWarning font-body text-bright-red ${
          errorState ? 'block' : 'hidden'
        } `}
      >
        This field is required
      </span>
    </div>
  );
}
