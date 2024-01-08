// import Image from 'next/image';
import HeroSection from '@/pages/heroSection';
import './globals.css';
import Youneed from './Youneed/page';
import Allservices from './Allservices/page';


export default function Home() {
  return (
    <>

      <HeroSection />
      <Youneed />
      <Allservices />
    </>
  );
}
