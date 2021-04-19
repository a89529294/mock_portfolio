import ProjectDetail from '../components/ProjectDetail';

import heroImage from '../assets/detail/mobile/image-fylo-hero@2x.jpg';
import heroImageTablet from '../assets/detail/tablet/image-fylo-hero@2x.jpg';
import heroImageDesktop from '../assets/detail/desktop/image-fylo-hero@2x.jpg';
import previewOne from '../assets/detail/mobile/image-fylo-preview-1@2x.jpg';
import previewOneTablet from '../assets/detail/tablet/image-fylo-preview-1@2x.jpg';
import previewOneDesktop from '../assets/detail/desktop/image-fylo-preview-1@2x.jpg';
import previewTwo from '../assets/detail/mobile/image-fylo-preview-2@2x.jpg';
import previewTwoTablet from '../assets/detail/tablet/image-fylo-preview-2@2x.jpg';
import previewTwoDesktop from '../assets/detail/desktop/image-fylo-preview-2@2x.jpg';

export default function FyloDetail() {
  return (
    <ProjectDetail
      heroImageArray={[heroImageDesktop, heroImageTablet, heroImage]}
      heroTitle="Fylo"
      heroBody={`This project was built in pure HTML and CSS. 
      I had mobile and desktop designs to work to and built it so that it was fully-responsive. 
      I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.`}
      tags={['Interaction Design', 'Front End Development', 'HTML', 'CSS']}
      projectDetailBody={`This project was a front-end challenge from Frontend Mentor. 
      It’s a platform that enables you to practice building websites to a design and project brief. 
      Each challenge includes mobile and desktop designs to show how the website should look at different 
      screen sizes. 
      Creating these projects has helped me refine my workflow and solve real-world coding problems. 
      I’ve learned something new with each project, helping me to improve and adapt my style.`}
      previewImageOneArray={[previewOneDesktop, previewOneTablet, previewOne]}
      previewImageTwoArray={[previewTwoDesktop, previewTwoTablet, previewTwo]}
      previousProject={{ link: '/portfolio/insure', name: 'Insure' }}
      nextProject={{ link: '/portfolio/manage', name: 'Manage' }}
    />
  );
}
