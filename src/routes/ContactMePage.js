import ContactMeForm from '../components/ContactMeForm';
import Divider from '../components/Divider';

import twitterBlack from '../assets/icons/twitter-black.svg';
import linkedinBlack from '../assets/icons/linkedin-black.svg';
import githubBlack from '../assets/icons/github-black.svg';

export default function ContactMePage() {
  return (
    <div className="px-8">
      <Divider />
      <div className="pt-6 pb-8 sm:pt-8">
        <h1 className="mb-6 section-title ">Get In Touch</h1>
        <p className="mb-6 section-body ">
          I’d love to hear about what you’re working on and how I could help.
          I’m currently looking for a new role and am open to a wide range of
          opportunities. My preference would be to find a position in a company
          in London. But I’m also happy to hear about opportunites that don’t
          fit that description. I’m a hard-working and positive person who will
          always approach each task with a sense of purpose and attention to
          detail. Please do feel free to check out my online profiles below and
          get in touch using the form.
        </p>

        <div className="flex space-x-4">
          <img src={githubBlack} alt="github logo" />
          <img src={twitterBlack} alt="twitter logo" />
          <img src={linkedinBlack} alt="linkedin logo" />
        </div>
      </div>
      <Divider />

      <ContactMeForm />
    </div>
  );
}
