import Link from 'next/link';
import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Contact from './Contact';
import Download from './Download';
import Location from './Location';
import Tools from './Tools';
import Image from 'next/image';
import { NAME, DESIGNATION, SOCIAL_LINKS } from '../../../constants/constants';
import Paundra from '../../../public/images/fotoku.png';

const Intro = () => {
  return (
    <>
      {/* fixed at top */}
      <div className='headerr z-50 absolute bg-MidNightBlack backdrop-blur-sm inset-y-0 h-48 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4'>
      <Image
  className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
  src={Paundra}
  alt="profile picture"
/>

      </div>

      {/* middle components */}
      <div className='beech z-20 flex flex-col overflow-y-scroll pt-48 top-48 space-y-6 divide-y divide-white overflow-x-hidden no-scrollbar px-4'>
        <Location />
        <Tools />
        <Contact />
        <Download icon={<FaDownload />} />
      </div>

      {/* fixed at bottom */}
      <div className='footer absolute flex justify-center space-x-6 text-xl items-center bottom-0 z-50 h-10 w-full bg-MidNightBlack text-Snow'>
        <Link href={SOCIAL_LINKS.GITHUB} target='_blank' rel='noreferrer' className=''>
          <FaGithub />
        </Link>
        <Link href={SOCIAL_LINKS.LINKEDIN} target='_blank' rel='noreferrer' className=''>
          <FaLinkedin />
        </Link>
      </div>
    </>
  );
};

export default Intro;
