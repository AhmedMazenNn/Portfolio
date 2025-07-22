import React, { useState, useEffect } from "react";
import "./header.scss";
import { motion } from "framer-motion";
import images from "../../constants/images";
import AppWrap from "../../wrapper/AppWrap";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

// eslint-disable-next-line react-refresh/only-export-components
function Header() {
  const MotionDiv = motion.div;
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageSources = [
      images.profile,
      images.circle,
      images.python,
      images.react,
      images.javascript,
    ];

    let loadedCount = 0;

    imageSources.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imageSources.length) {
          setTimeout(() => {
            setImagesLoaded(true);
          }, 1000); // 2000 ms = 2 seconds
        }
      };
    });
  }, []);

  return (
    <div className="app__header app__flex">
      {!imagesLoaded ? (
        <div className="loader">
          <span></span>
        </div>
      ) : (
        <>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
            className="app__header-info"
          >
            <div className="app__header-badge">
              <div className="badge-cmp app__flex">
                <span>👋</span>
                <div style={{ marginLeft: 20 }}>
                  <p className="p-text">Hello, I am</p>
                  <h1 className="head-text">Ahmed</h1>
                </div>
              </div>

              <div className="tag-cmp app__flex">
                <p className="p-text">Full stack Web Developer</p>
              </div>

              <a
                href="https://khamsat.com/user/ahmed2mazen"
                target="_blank"
                rel="noopener noreferrer"
                className="hire-btn"
              >
                Hire Me
              </a>
              <a
                href="/CV.pdf"
                download="CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-btn"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1.5, delayChildren: 0.5 }}
            className="app__header-img"
          >
            <img id="profile" src={images.profile} alt="profile_bg" />
            <motion.img
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              src={images.circle}
              alt="profile_circle"
              className="overlay_circle"
            />
          </motion.div>

          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__header-circles"
          >
            {[images.python, images.react, images.javascript].map(
              (circle, index) => (
                <div className="circle-cmp app__flex" key={`circle-${index}`}>
                  <img src={circle} alt="tech_circle" />
                </div>
              )
            )}
          </motion.div>
        </>
      )}
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default AppWrap(Header, "home");
