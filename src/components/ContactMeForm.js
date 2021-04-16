import { useRef, useState } from 'react';

import SolidButton from './SolidButton';

const MyInput = ({
  label,
  placeholder,
  useTextArea = false,
  state,
  setState,
}) => {
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
        className="block mt-6 mb-2 font-bold text-sectionTag text-gray-dark-blue text-opacity-80"
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
};

export default function ContactMeForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMsg(e.target.value);
  };

  const handleSendMessage = () => {
    if (name === '' || email === '' || msg === '') {
    } else {
      window.alert('message sent');
    }
  };

  return (
    <div className="pt-8 pb-20">
      <h1 className="section-title">Contact Me</h1>
      <MyInput
        label="Name"
        placeholder="John Doe"
        state={name}
        setState={handleNameChange}
      />
      <MyInput
        label="Email Address"
        placeholder="email@example.com"
        state={email}
        setState={handleEmailChange}
      />
      <MyInput
        label="Message"
        placeholder="How can I help?"
        useTextArea={true}
        state={msg}
        setState={handleMessageChange}
      />
      <SolidButton
        label="SEND MESSAGE"
        callback={handleSendMessage}
        className="mt-6"
      />
    </div>
  );
}
