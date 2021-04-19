import { useState } from 'react';

import SolidButton from '../components/SolidButton';
import Divider from '../components/Divider';
import MyInput from '../components/MyInput';

import twitterBlack from '../assets/icons/twitter-black.svg';
import linkedinBlack from '../assets/icons/linkedin-black.svg';
import githubBlack from '../assets/icons/github-black.svg';

export default function ContactMePage() {
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
    <div className="px-8 lg:px-40">
      <Divider />
      <div className="pt-6 pb-8 sm:pt-8 lg:flex lg:justify-between lg:py-12">
        <h1 className="section-title text-sectionTitleMedium ">Get In Touch</h1>
        <div className="lg:w-7/12">
          <p className="my-6 section-body lg:mt-0">
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>
          <div className="flex space-x-4">
            <img src={githubBlack} alt="github logo" />
            <img src={twitterBlack} alt="twitter logo" />
            <img src={linkedinBlack} alt="linkedin logo" />
          </div>
        </div>
      </div>
      <Divider />

      <div className="pt-8 pb-20 lg:flex lg:justify-between lg:py-12">
        <h1 className="section-title text-sectionTitleMedium">Contact Me</h1>
        <div className="lg:w-7/12">
          <MyInput
            label="Name"
            placeholder="John Doe"
            state={name}
            setState={handleNameChange}
            mt="mt-0"
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
      </div>
    </div>
  );
}
