// src/wrapper/AppWrap.jsx

import React from 'react';
import NavigationDots from '../components/NavigationDots';
import SocialMedia from '../components/SocialMedia';

export default function AppWrap(Component, idName, classNames) {
  return function HOC() {
    return (
<div id={idName} className={`app__container ${classNames}`} style={{ cursor: 'pointer' }}>
<SocialMedia />

        <div className='app__wrapper app__flex'>
          <Component />
          <div className='copyright'>
            <p className='p-text'>@2025 Ahmed Mazen</p>
            <p className='p-text'>All rights reserved</p>
          </div>
        </div>

        <NavigationDots active={idName} />
      </div>
    );
  };
}
