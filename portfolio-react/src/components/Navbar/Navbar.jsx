import React, { useState } from 'react';
import './navbar.scss';
import images from '../../constants/images';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';


export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const MotionDiv = motion.div; 
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <strong><a href={`#${item}`}>{item}</a></strong>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        <AnimatePresence>
  {toggle && (
    <motion.div
      key="menu"
      initial={{ x: 200 }}
      animate={{ x: 0 }}
      exit={{ x: 700 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <HiX onClick={() => setToggle(false)} />
      <ul>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li key={item}>
            <a href={`#${item}`} onClick={() => setToggle(false)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </nav>
  );
};
