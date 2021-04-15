import Divider from './Divider';
import OutlineButton from './OutlineButton';

export default function SectionWithImage({
  image,
  title,
  body,
  tags,
  btnLabel,
  linkURL,
}) {
  return (
    <div>
      <img src={image} alt="profile" className="w-full mb-8" />
      <Divider />
      <div className="pt-8 pb-12">
        <h1 className="mb-8 section-title">{title}</h1>
        <p className="mb-6 section-body">{body}</p>
        {tags ? (
          <p className="mb-6 section-tags">
            {tags.map((tag, i) => {
              return i === tags.length - 1 ? tag : tag + ' / ';
            })}
          </p>
        ) : null}

        <OutlineButton label={btnLabel} linkURL={linkURL} />
      </div>
      <Divider />
    </div>
  );
}
