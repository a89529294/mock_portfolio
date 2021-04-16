import manageImage from '../assets/portfolio/mobile/image-portfolio-manage@2x.jpg';
import bookmarkImage from '../assets/portfolio/mobile/image-portfolio-bookmark@2x.jpg';
import insureImage from '../assets/portfolio/mobile/image-portfolio-insure@2x.jpg';
import fyloImage from '../assets/portfolio/mobile/image-portfolio-fylo@2x.jpg';

import SectionWithImage from '../components/SectionWithImage';

export default function Porfolio() {
  return (
    <div className="p-8 pt-0 space-y-20">
      <SectionWithImage
        image={manageImage}
        title="Manage"
        body={`This project required me to build a fully responsive landing page to the designs provided. 
        I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, 
        such as the testimonial slider.`}
        btnLabel="VIEW PROJECT"
        linkURL="/portfolio/manage"
      />
      <SectionWithImage
        image={bookmarkImage}
        title="Bookmark"
        body={`This project required me to build a fully responsive landing page to the designs provided. 
        I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, 
        such as the features section.`}
        btnLabel="VIEW PROJECT"
        linkURL="/portfolio/bookmark"
      />
      <SectionWithImage
        image={insureImage}
        title="Insure"
        body={`This was a small project which mostly consisted of HTML and CSS. 
          I built a fully-responsive landing page. 
          The only JavaScript this project required was to enable the toggling of the mobile navigation.`}
        btnLabel="VIEW PROJECT"
        linkURL="/portfolio/insure"
      />
      <SectionWithImage
        image={fyloImage}
        title="Fylo"
        body={`This project was built in pure HTML and CSS. 
          I had mobile and desktop designs to work to and built it so that it was fully-responsive. 
          I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.`}
        btnLabel="VIEW PROJECT"
        linkURL="/portfolio/fylo"
      />
    </div>
  );
}
