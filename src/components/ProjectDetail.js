import ContactMe from "./ContactMe";
import Divider from "./Divider";
import VerticalDivider from "./VerticalDivider";

import SectionWithImage from "./SectionWithImage";
import leftArrow from "../assets/icons/arrow-left.svg";
import rightArrow from "../assets/icons/arrow-right.svg";

const Section = ({ title, children }) => (
  <>
    <h1 className='mt-12 font-normal mb-7 section-title text-gray-dark-blue'>
      {title}
    </h1>
    {children}
  </>
);

const ProjectSelector = ({ previousProject, nextProject }) => {
  return (
    <>
      <Divider />
      <div className='flex l'>
        <div className='w-full py-6'>
          <img
            src={leftArrow}
            alt='left arrow'
            className='mb-4 w-2 h-4 object-cover'
          />
          <h1 className='section-title text-gray-dark-blue font-title font-normal'>
            {previousProject}
          </h1>
          <h2 className='text-sectionBody font-normal text-gray-dark-blue text-opacity-50 font-body'>
            Previous Project
          </h2>
        </div>
        <VerticalDivider />
        <div className='w-full py-6'>
          <img
            src={rightArrow}
            alt='right arrow'
            className='mb-4 w-2 h-4 object-cover mr-0 ml-auto'
          />
          <h1 className='section-title text-gray-dark-blue font-title font-normal text-right'>
            {nextProject}
          </h1>
          <h2 className='text-sectionBody font-normal text-gray-dark-blue text-opacity-50 text-right'>
            Next Project
          </h2>
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
    <div className='px-8 '>
      <SectionWithImage
        image={heroImage}
        title={heroTitle}
        body={heroBody}
        tags={tags}
        btnLabel='VIEW WEBSITE'
        linkURL='#'
      />
      <Section title='Project Background'>
        <p className='mb-6 section-body'>{projectDetailBody}</p>
      </Section>
      <Section title='Static Previews'>
        <img src={previewImageOne} alt='preview one' className='mb-8' />
        <img src={previewImageTwo} alt='preview two' className='mb-16' />
      </Section>
      <ProjectSelector
        previousProject={previousProject}
        nextProject={nextProject}
      />
      <ContactMe />
    </div>
  );
}
