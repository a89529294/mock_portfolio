import Navbar from '../components/Navbar';
import heroImage from '../assets/homepage/mobile/image-homepage-hero@2x.jpg';
import SolidButton from '../components/SolidButton';

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
    <div className="p-8">
      <Navbar />
      <Hero />
    </div>
  );
}
