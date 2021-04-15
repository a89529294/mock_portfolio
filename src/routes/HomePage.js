import SolidButton from '../components/SolidButton';
import ContactMe from '../components/ContactMe';

import heroImage from '../assets/homepage/mobile/image-homepage-hero@2x.jpg';
import profileImage from '../assets/homepage/mobile/image-homepage-profile.jpg';
import SectionWithImage from '../components/SectionWithImage';

const Hero = () => {
  return (
    <div className="mb-24">
      <img src={heroImage} alt="hero" className="w-full h-72" />
      <h1 className="mt-6 mb-8 section-title">
        Hey, I’m Albert Chang and I love building beautiful websites
      </h1>
      <SolidButton label="ABOUT ME" />
    </div>
  );
};

export default function HomePage() {
  return (
    <div className="p-8 pt-0">
      <Hero />
      <SectionWithImage
        image={profileImage}
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
      />
      <ContactMe />
    </div>
  );
}
