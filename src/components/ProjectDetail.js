import { Link } from 'react-router-dom';

import ContactMe from './ContactMe';
import Divider from './Divider';
import VerticalDivider from './VerticalDivider';

import SectionWithImage from './SectionWithImage';
import leftArrow from '../assets/icons/arrow-left.svg';
import rightArrow from '../assets/icons/arrow-right.svg';

const Section = ({ title, children }) => (
  <>
    <h1 className="mt-12 font-normal mb-7 section-title text-gray-dark-blue">
      {title}
    </h1>
    {children}
  </>
);

const ProjectSelector = ({ previousProject, nextProject }) => {
  return (
    <>
      <Divider />
      <div className="flex l">
        <div className="w-full py-6">
          <Link to={previousProject.link}>
            <img
              src={leftArrow}
              alt="left arrow"
              className="object-cover w-2 h-4 mb-4"
            />
            <h1 className="font-normal section-title text-gray-dark-blue font-title">
              {previousProject.name}
            </h1>
            <h2 className="font-normal text-opacity-50 text-sectionBody text-gray-dark-blue font-body">
              Previous Project
            </h2>
          </Link>
        </div>
        <VerticalDivider />
        <div className="w-full py-6">
          <Link to={nextProject.link}>
            <img
              src={rightArrow}
              alt="right arrow"
              className="object-cover w-2 h-4 mb-4 ml-auto mr-0"
            />
            <h1 className="font-normal text-right section-title text-gray-dark-blue font-title">
              {nextProject.name}
            </h1>
            <h2 className="font-normal text-right text-opacity-50 text-sectionBody text-gray-dark-blue">
              Next Project
            </h2>
          </Link>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default function ProjectDetail({
  heroImage,
  heroTitle,
  heroBody,
  tags,
  projectDetailBody,
  previewImageOne,
  previewImageTwo,
  previousProject,
  nextProject,
}) {
  return (
    <div className="px-8 ">
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
      <ProjectSelector
        previousProject={previousProject}
        nextProject={nextProject}
      />
      <ContactMe />
    </div>
  );
}
