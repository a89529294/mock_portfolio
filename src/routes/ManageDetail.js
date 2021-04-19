import ProjectDetail from '../components/ProjectDetail';

import heroImage from '../assets/detail/mobile/image-manage-hero@2x.jpg';
import heroImageTablet from '../assets/detail/tablet/image-manage-hero@2x.jpg';
import heroImageDesktop from '../assets/detail/desktop/image-manage-hero@2x.jpg';
import previewOne from '../assets/detail/mobile/image-manage-preview-1@2x.jpg';
import previewOneTablet from '../assets/detail/tablet/image-manage-preview-1@2x.jpg';
import previewOneDesktop from '../assets/detail/desktop/image-manage-preview-1@2x.jpg';
import previewTwo from '../assets/detail/mobile/image-manage-preview-2@2x.jpg';
import previewTwoTablet from '../assets/detail/tablet/image-manage-preview-2@2x.jpg';
import previewTwoDesktop from '../assets/detail/desktop/image-manage-preview-2@2x.jpg';

export default function ManageDetail() {
  return (
    <ProjectDetail
      heroImageArray={[heroImageDesktop, heroImageTablet, heroImage]}
      heroTitle="Manage"
      heroBody={`This project required me to build a fully responsive landing page to the designs provided. 
      I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, 
      such as the testimonial slider.`}
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
      previewImageOneArray={[previewOneDesktop, previewOneTablet, previewOne]}
      previewImageTwoArray={[previewTwoDesktop, previewTwoTablet, previewTwo]}
      previousProject={{ link: '/portfolio/fylo', name: 'Fylo' }}
      nextProject={{ link: '/portfolio/bookmark', name: 'Bookmark' }}
    />
  );
}
