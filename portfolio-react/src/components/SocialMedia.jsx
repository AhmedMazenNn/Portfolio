import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function SocialMedia() {
  return (
    <div className='app__social'>
      <div>
        <a href='https://www.facebook.com/profile.php?id=100094866071065' target='_blank' rel='noreferrer'>
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href='https://www.linkedin.com/in/ahmedmazenm' target='_blank' rel='noreferrer'>
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a href='https://github.com/AhmedMazenNn' target='_blank' rel='noreferrer'>
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
