import OutlineButton from './OutlineButton';

export default function ContactMe() {
  return (
    <div className="pb-20 pt-28">
      <h1 className="mb-10 text-center section-title">
        Interested in <br />
        doing a project <br />
        together?
      </h1>
      <OutlineButton label="CONTACT ME" center={true} linkURL="/contact" />
    </div>
  );
}
