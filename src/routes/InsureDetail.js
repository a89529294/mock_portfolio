import ProjectDetail from '../components/ProjectDetail';
import useMediaQuery from '../hooks/useMediaQuery';

import heroImage from '../assets/detail/mobile/image-insure-hero@2x.jpg';
import heroImageTablet from '../assets/detail/tablet/image-insure-hero@2x.jpg';
import previewOne from '../assets/detail/mobile/image-insure-preview-1@2x.jpg';
import previewOneTablet from '../assets/detail/tablet/image-insure-preview-1@2x.jpg';
import previewTwo from '../assets/detail/mobile/image-insure-preview-2@2x.jpg';
import previewTwoTablet from '../assets/detail/tablet/image-insure-preview-2@2x.jpg';

export default function InsureDetail() {
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
  return (
    <ProjectDetail
      heroImage={isTablet ? heroImageTablet : heroImage}
      heroTitle="Insure"
      heroBody={`This was a small project which mostly consisted of HTML and CSS. 
      I built a fully-responsive landing page. The only JavaScript this project required was to 
      enable the toggling of the mobile navigation.`}
      tags={[
        'Interaction Design',
        'Front End Development',
        'HTML',
        'CSS',
        'JS',
      ]}
      projectDetailBody={`This project was a front-end  challenge from Frontend Mentor. 
      It’s a platform that enables you to practice building websites to a design and project brief. 
      Each challenge includes mobile and desktop designs to show how the website should look at different 
      screen sizes. 
      Creating these projects has helped me refine my workflow and solve real-world coding problems. 
      I’ve learned something new with each project, helping me to improve and adapt my style.`}
      previewImageOne={isTablet ? previewOneTablet : previewOne}
      previewImageTwo={isTablet ? previewTwoTablet : previewTwo}
      previousProject={{ link: '/portfolio/bookmark', name: 'Bookmark' }}
      nextProject={{ link: '/portfolio/fylo', name: 'Fylo' }}
    />
  );
}
