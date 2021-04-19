import { forwardRef } from 'react';

import Divider from './Divider';
import OutlineButton from './OutlineButton';

function SectionWithImage(
  {
    image,
    title,
    body,
    tags,
    btnLabel,
    linkURL,
    imgStyle,
    sectionStyle,
    imageYPadding = false,
    lineupImageBottomWithButton = false,
    swap = false,
  },
  ref
) {
  return (
    <div
      className={`sm:flex sm:justify-between ${
        swap ? 'sm:flex-row-reverse' : 'sm:flex-row'
      }`}
      ref={ref}
    >
      {image ? (
        <img
          src={image}
          alt="profile"
          className={`w-full mb-8 ${
            imageYPadding ? 'sm:my-12' : 'sm:mb-0'
          } ${imgStyle}`}
        />
      ) : null}
      <div className={`${sectionStyle}`}>
        <Divider />
        <div
          className={`py-6 sm:h-full sm:flex sm:flex-col sm:justify-between ${
            lineupImageBottomWithButton ? 'sm:pb-12' : ''
          } lg:py-24 lg:justify-center lg:space-y-6`}
        >
          <h1 className="mb-8 section-title text-sectionTitleMedium sm:mb-0">
            {title}
          </h1>
          <p className="mb-6 section-body sm:mb-0 ">{body}</p>
          {tags ? (
            <p className="mb-6 section-tags">
              {tags.map((tag, i) => {
                return i === tags.length - 1 ? tag : tag + ' / ';
              })}
            </p>
          ) : null}
          {btnLabel ? (
            <OutlineButton label={btnLabel} linkURL={linkURL} />
          ) : null}
        </div>
        <Divider />
      </div>
    </div>
  );
}

export default forwardRef(SectionWithImage);
