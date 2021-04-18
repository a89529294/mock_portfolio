import SolidButton from '../components/SolidButton';
import ContactMe from '../components/ContactMe';
import useMediaQuery from '../hooks/useMediaQuery';

import heroImage from '../assets/homepage/mobile/image-homepage-hero@2x.jpg';
import profileImage from '../assets/homepage/mobile/image-homepage-profile.jpg';
import profileImageTablet from '../assets/homepage/tablet/image-homepage-profile@2x.jpg';
import SectionWithImage from '../components/SectionWithImage';

const Hero = () => {
  return (
    <div className="mb-24 sm:relative ">
      <img src={heroImage} alt="hero" className="w-full " />
      <div className="sm:bg-white sm:absolute sm:bottom-0 sm:left-0 sm:w-3/4 sm:pt-14 sm:pr-14">
        <h1 className="mt-6 mb-8 section-title sm:mb-12">
          Hey, I’m Albert Chang and I love building beautiful websites
        </h1>
        <SolidButton label="ABOUT ME" showImage={true} />
      </div>
    </div>
  );
};

export default function HomePage() {
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
  return (
    <div className="p-8 pt-0">
      <Hero />
      <SectionWithImage
        image={isTablet ? profileImageTablet : profileImage}
        title="About Me"
        body={`I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in London, UK, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.`}
        btnLabel="GO TO PORTFOLIO"
        linkURL="/portfolio"
        widthsForTablet={['w-5/12', 'w-1/2']}
        // widthsForLaptop={['w-1/2', 'w-3/8']}
      />
      <ContactMe />
    </div>
  );
}
