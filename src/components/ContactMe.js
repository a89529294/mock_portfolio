import OutlineButton from './OutlineButton';
import useMediaQuery from '../hooks/useMediaQuery';
import Divider from './Divider';

export default function ContactMe() {
  const isLargerThanMobile = useMediaQuery('(min-width: 640px)');
  const str = isLargerThanMobile
    ? `
  Interested in doing
  a project together?
  `
    : `Interested in
  doing a project
  together?
  `;
  return (
    <div className="pt-20 pb-20">
      <div className="sm:flex sm:items-center">
        <h1 className="mb-10 text-center whitespace-pre-line section-title">
          {str}
        </h1>
        <div className="hidden w-8 sm:block" />
        <div className="hidden sm:block sm:flex-grow">
          <Divider />
        </div>
        <div className="hidden w-8 sm:block" />
        <OutlineButton
          label="CONTACT ME"
          center={true}
          linkURL="/contact"
          width="w-40"
        />
      </div>
    </div>
  );
}
