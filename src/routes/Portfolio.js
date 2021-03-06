import useMediaQuery from '../hooks/useMediaQuery';

import manageImage from '../assets/portfolio/mobile/image-portfolio-manage@2x.jpg';
import bookmarkImage from '../assets/portfolio/mobile/image-portfolio-bookmark@2x.jpg';
import insureImage from '../assets/portfolio/mobile/image-portfolio-insure@2x.jpg';
import fyloImage from '../assets/portfolio/mobile/image-portfolio-fylo@2x.jpg';
import manageImageLarge from '../assets/portfolio/desktop/image-portfolio-manage@2x.jpg';
import bookmarkImageLarge from '../assets/portfolio/desktop/image-portfolio-bookmark@2x.jpg';
import insureImageLarge from '../assets/portfolio/desktop/image-portfolio-insure@2x.jpg';
import fyloImageLarge from '../assets/portfolio/desktop/image-portfolio-fylo@2x.jpg';

import SectionWithImage from '../components/SectionWithImage';
import ContactMe from '../components/ContactMe';

export default function Porfolio() {
  const isLargerThanMobile = useMediaQuery('(min-width: 640px)');
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
  return (
    <div className="px-8 space-y-20 lg:px-40">
      <SectionWithImage
        image={isLargerThanMobile ? manageImageLarge : manageImage}
        title="Manage"
        body={`This project required me to build a fully responsive landing page to the designs provided. 
        I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, 
        such as the testimonial slider.`}
        btnLabel="VIEW PROJECT"
        linkURL="/portfolio/manage"
        imgStyle="sm:w-1/2"
        sectionStyle="sm:w-3/8"
        imageYPadding={isTablet}
        lineupImageBottomWithButton={isTablet}
      />
      <SectionWithImage
        image={isLargerThanMobile ? bookmarkImageLarge : bookmarkImage}
        title="Bookmark"
        body={`This project required me to build a fully responsive landing page to the designs provided. 
        I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, 
        such as the features section.`}
        btnLabel="VIEW PROJECT"
        linkURL="/portfolio/bookmark"
        imgStyle="sm:w-1/2"
        sectionStyle="sm:w-3/8"
        imageYPadding={isTablet}
        lineupImageBottomWithButton={isTablet}
        swap={true}
      />
      <SectionWithImage
        image={isLargerThanMobile ? insureImageLarge : insureImage}
        title="Insure"
        body={`This was a small project which mostly consisted of HTML and CSS. 
          I built a fully-responsive landing page. 
          The only JavaScript this project required was to enable the toggling of the mobile navigation.`}
        btnLabel="VIEW PROJECT"
        linkURL="/portfolio/insure"
        imgStyle="sm:w-1/2"
        sectionStyle="sm:w-3/8"
        imageYPadding={isTablet}
        lineupImageBottomWithButton={isTablet}
      />
      <SectionWithImage
        image={isLargerThanMobile ? fyloImageLarge : fyloImage}
        title="Fylo"
        body={`This project was built in pure HTML and CSS. 
          I had mobile and desktop designs to work to and built it so that it was fully-responsive. 
          I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.`}
        btnLabel="VIEW PROJECT"
        linkURL="/portfolio/fylo"
        imgStyle="sm:w-1/2"
        sectionStyle="sm:w-3/8"
        imageYPadding={isTablet}
        lineupImageBottomWithButton={isTablet}
        swap={true}
      />
      <ContactMe />
    </div>
  );
}
