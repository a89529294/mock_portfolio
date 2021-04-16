import Divider from './Divider';
import OutlineButton from './OutlineButton';

import twitterBlack from '../assets/icons/twitter-black.svg';
import linkedinBlack from '../assets/icons/linkedin-black.svg';
import githubBlack from '../assets/icons/github-black.svg';

export default function SectionWithImage({
  image,
  title,
  body,
  tags,
  showSocialMedia = false,
  btnLabel,
  linkURL,
}) {
  return (
    <>
      {image ? <img src={image} alt="profile" className="w-full mb-8" /> : null}
      <Divider />
      <div className="py-6">
        <h1 className="mb-8 section-title">{title}</h1>
        <p className="mb-6 section-body">{body}</p>
        {tags ? (
          <p className="mb-6 section-tags">
            {tags.map((tag, i) => {
              return i === tags.length - 1 ? tag : tag + ' / ';
            })}
          </p>
        ) : null}
        {btnLabel ? <OutlineButton label={btnLabel} linkURL={linkURL} /> : null}
        {showSocialMedia && (
          <div className="flex space-x-4">
            <img src={githubBlack} alt="github logo" />
            <img src={twitterBlack} alt="twitter logo" />
            <img src={linkedinBlack} alt="linkedin logo" />
          </div>
        )}
      </div>
      <Divider />
    </>
  );
}
