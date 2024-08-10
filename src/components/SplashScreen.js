import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import DownloadButtons from '../components/DownloadButtons';
import Footer from '../components/FooterCopyright';
import '../styles/SplashScreen.scss';

const SplashScreen = () => {
  const router = useRouter();

  return (
    <div className="splash-main">
      <Image src="/Assets/images/bg-top-right.svg" alt="Background Top Right" layout="fill" className="bg-top-right" />
      <Image src="/Assets/images/bg-bottom-left.svg" alt="Background Bottom Left" layout="fill" className="bg-bottom-left" />

      <div className="content-outer">
        <Image src="/Assets/images/logo.svg" alt="Logo" width={90} height={90} className="logo" />

        <div className="main-buttons">
          <button className="signin-btn" onClick={() => router.push('/login')}>I already have an account</button>
          <button className="register-btn" onClick={() => router.push('/register')}>Sign up as a new kitchen</button>
        </div>

        <DownloadButtons />
      </div>

      <Footer />
    </div>
  );
}

export default SplashScreen;
