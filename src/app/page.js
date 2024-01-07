// import Image from 'next/image';
import Allservices from './Allservices/page';
import Youneed from './Youneed/page';
import './globals.css';


export default function Home() {
  return (
    <>
      {/* <div>Hello</div>
      <img
        src="/logo.svg" 
        alt="Description of the image"
        width={100} 
        height={50} 
      /> */}

      <Youneed/>
      <Allservices/>
    </>
  );
}
