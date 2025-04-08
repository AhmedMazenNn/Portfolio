import React, { useState } from 'react';
import images from '../../constants/images';

import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import { client } from '../../client';

import './footer.scss';

// eslint-disable-next-line react-refresh/only-export-components
function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(''); // Clear error on typing
  };

  const handleSubmit = () => {
    // Simple validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all fields before submitting.');
      return;
    }

    setLoading(true);
    const contact = {
      _type: 'contact',
      name,
      email,
      message
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Chat With Me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:ahmedmazenm@outlook.com" className="p-text">ahmedmazenm@outlook.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+201208331953" className="p-text">+20 120 833 1953</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleChangeInput}
              required
            />
          </div>
          {error && <p className="error-text" style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
);
