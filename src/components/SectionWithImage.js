import Divider from './Divider';
import OutlineButton from './OutlineButton';

export default function SectionWithImage({
  image,
  title,
  body,
  tags,
  btnLabel,
  linkURL,
  widthsForTablet = [],
  widthsForDesktop = [],
  imageYPadding = false,
  lineupImageBottomWithButton = false,
  swap = false,
}) {
  return (
    <div
      className={`sm:flex sm:justify-between ${
        swap ? 'sm:flex-row-reverse' : 'sm:flex-row'
      }`}
    >
      {image ? (
        <img
          src={image}
          alt="profile"
          className={`w-full mb-8 sm:${widthsForTablet[0]} ${
            imageYPadding ? 'sm:my-12' : 'sm:mb-0'
          } lg:${widthsForDesktop[0]}`}
        />
      ) : null}
      <div className={`sm:${widthsForTablet[1]} lg:${widthsForDesktop[1]}`}>
        <Divider />
        <div
          className={`py-6 sm:h-full sm:flex sm:flex-col sm:justify-between ${
            lineupImageBottomWithButton ? 'sm:pb-12' : ''
          } `}
        >
          <h1 className="mb-8 section-title sm:mb-0">{title}</h1>
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
