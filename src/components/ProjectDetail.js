import { Link } from 'react-router-dom';

import useMediaQuery from '../hooks/useMediaQuery';

import ContactMe from './ContactMe';
import Divider from './Divider';
import VerticalDivider from './VerticalDivider';
import OutlineButton from './OutlineButton';

import leftArrow from '../assets/icons/arrow-left.svg';
import rightArrow from '../assets/icons/arrow-right.svg';

const Hero = ({ image, title, body, tags, btnLabel, linkURL }) => {
  return (
    <div>
      <img src={image} alt="profile" className="w-full mb-8" />

      <Divider />
      <div className="py-6 sm:flex sm:justify-between sm:space-x-1 sm:py-8">
        <div className="hidden sm:block sm:w-5/12">
          <h1 className="mb-8 section-title text-sectionTitleMedium sm:mb-4">
            {title}
          </h1>
          <p className="mb-6 section-tags sm:mb-4">
            {tags.map((tag, i) => {
              return i === tags.length - 1 ? tag : tag + ' / ';
            })}
          </p>
          <OutlineButton label={btnLabel} linkURL={linkURL} width="w-44" />
        </div>
        <p className="hidden mb-6 section-body sm:mb-0 sm:block sm:w-1/2">
          {body}
        </p>

        <div className="sm:hidden">
          <h1 className="mb-8 section-title text-sectionTitleMedium sm:mb-0">
            {title}
          </h1>
          <p className="mb-6 section-body sm:mb-0 ">{body}</p>
          <p className="mb-6 section-tags">
            {tags.map((tag, i) => {
              return i === tags.length - 1 ? tag : tag + ' / ';
            })}
          </p>
          <OutlineButton label={btnLabel} linkURL={linkURL} width="w-44" />
        </div>
      </div>
      <Divider />
    </div>
  );
};

const Section = ({ title, children, titleStyle }) => (
  <>
    <h1
      className={`${titleStyle} font-normal mb-7 section-title text-gray-dark-blue`}
    >
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
  heroImageArray,
  heroTitle,
  heroBody,
  tags,
  projectDetailBody,
  previewImageOneArray,
  previewImageTwoArray,
  previousProject,
  nextProject,
}) {
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
  const isDesktop = useMediaQuery('(min-width:1024px)');

  const heroImage = isDesktop
    ? heroImageArray[0]
    : isTablet
    ? heroImageArray[1]
    : heroImageArray[2];
  const previewImageOne = isDesktop
    ? previewImageOneArray[0]
    : isTablet
    ? previewImageOneArray[1]
    : previewImageOneArray[2];
  const previewImageTwo = isDesktop
    ? previewImageTwoArray[0]
    : isTablet
    ? previewImageTwoArray[1]
    : previewImageTwoArray[2];

  return (
    <div className="px-8 lg:px-40">
      <div className="lg:hidden">
        <Hero
          image={heroImage}
          title={heroTitle}
          body={heroBody}
          tags={tags}
          btnLabel="VIEW WEBSITE"
          linkURL="#"
        />
        <Section title="Project Background" titleStyle="mt-12">
          <p className="mb-6 section-body">{projectDetailBody}</p>
        </Section>
        <Section title="Static Previews">
          <img src={previewImageOne} alt="preview one" className="mb-8" />
          <img src={previewImageTwo} alt="preview two" className="mb-16" />
        </Section>
      </div>
      <div className="hidden lg:block">
        <img src={heroImage} alt="profile" className="w-full mb-28" />
        <div className="flex justify-between mb-16">
          <div className="w-4/12">
            <Divider />
            <h1 className="pt-12 section-title text-sectionTitleMedium pb-7">
              {heroTitle}
            </h1>
            <p className="pb-6 section-body">{heroBody}</p>
            <p className="pb-8 section-tags-large">
              {tags.map((tag, i) => {
                return i === tags.length - 1 ? tag : tag + ' / ';
              })}
            </p>
            <OutlineButton label="VIEW WEBSITE" linkURL="#" width="w-44" />
            <div className="w-full h-12"></div>
            <Divider />
          </div>
          <div className="w-7/12">
            <Section title="Project Background">
              <p className="mb-6 section-body">{projectDetailBody}</p>
            </Section>
            <Section title="Static Previews">
              <img src={previewImageOne} alt="preview one" className="mb-8" />
              <img src={previewImageTwo} alt="preview two" />
            </Section>
          </div>
        </div>
      </div>

      <ProjectSelector
        previousProject={previousProject}
        nextProject={nextProject}
      />
      <ContactMe />
    </div>
  );
}
