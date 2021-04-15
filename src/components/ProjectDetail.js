import Divider from './Divider';
import SectionWithImage from './SectionWithImage';

const Section = ({ title, children }) => (
  <>
    <h1 className="mt-12 font-normal mb-7 section-title text-gray-dark-blue">
      {title}
    </h1>
    {children}
  </>
);

const ProjectSelector = () => {};

export default function ProjectDetail({
  heroImage,
  heroTitle,
  heroBody,
  tags,
  projectDetailBody,
  previewImageOne,
  previewImageTwo,
}) {
  return (
    <div className="p-8 pt-0">
      <SectionWithImage
        image={heroImage}
        title={heroTitle}
        body={heroBody}
        tags={tags}
        btnLabel="VIEW WEBSITE"
        linkURL="#"
      />
      <Section title="Project Background">
        <p className="mb-6 section-body">{projectDetailBody}</p>
      </Section>
      <Section title="Static Previews">
        <img src={previewImageOne} alt="preview one" className="mb-8" />
        <img src={previewImageTwo} alt="preview two" className="mb-16" />
      </Section>
      <ProjectSelector />
    </div>
  );
}
