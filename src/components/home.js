/* eslint-disable max-len */
import React from 'react';
import { withRouter } from 'react-router-dom';
import Sky from '../img/harpSky.png';
import Circle from '../img/harpCircle.png';

const Home = (props) => {
  return (
    <div>
      <div className="home-header">
        <p>Cultivating a Vibrant Heart</p>
        <p>for a Vivid Life.</p>
      </div>
      <div className="home-top">
        <div className="home-btn" role="button" tabIndex={0} onClick={() => { console.log('Hi'); }}>
          Book a Free Consultation
        </div>
        <div className="home-photo">
          <img src={Sky} alt="sky" className="sky-harp" />
        </div>
      </div>
      <div className="home-bottom">
        <div className="left-bottom">
          <img src={Circle} alt="circle" className="circle-harp" />
        </div>
        <div className="right-bottom">
          <div className="right-bottom-text-holder">
            <div className="right-bottom-text-header">
              Aloha,
            </div>
            <div className="right-bottom-text">
              I’m Harp, attorney turned spiritual seeker and certified life coach. One of the biggest lessons I’ve uncovered in walking the spiritual path is that true transformation rests in our ability to cultivate a vibrant heart - a heart that can dance with pain and sorrow just as easefully as joy and laughter. My aim is to empower and inspire you to embrace the fullness of your vibrant heart, so that you may step into the truest expression of who you are. When we greet the world from this place of authenticity, challenges feel less daunting, synchronicity becomes a regular occurrence and life takes on a whole new magic.
            </div>
          </div>
          <div className="home-btn" role="button" tabIndex={0} onClick={() => { console.log('Hi'); }}>
            Book a Free Consultation
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter((Home));
