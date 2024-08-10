import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/FooterCopyright';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import '../styles/SignIn.scss';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="sign-in">
      <Image src="/bg-top-right.svg" alt="Background Top Right" layout="fill" className="bg-top-right" />
      <Image src="/bg-bottom-left.svg" alt="Background Bottom Left" layout="fill" className="bg-bottom-left" />

      <div className="content-outer">
        <Link href="/splash">
          <a>
            <Image src="/logo.svg" alt="Logo" width={90} height={90} className="logo" />
          </a>
        </Link>
        <h2>Sign In</h2>
        <form>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username or Phone Number"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BsEyeSlash /> : <BsEye />}
            </span>
          </div>
          <div className="options-radio">
            <label>
              <input type="radio" name="options" id="keep-signed-in" />
              Keep me signed in
            </label>
          </div>
          <div className="main-buttons">
            <button type="submit" className="signin-btn">Sign In</button>
          </div>
          <button type="button" className="forgot-password">
            I forgot my password
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignIn;
