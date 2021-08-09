/* eslint-disable max-len */
import React from 'react';
import { withRouter } from 'react-router-dom';
import LogoCircle from '../img/harpLogoCircle.png';

const Who = (props) => {
  return (
    <div className="who-page">
      <div className="Body-holder">
        <img src={LogoCircle} alt="Body" className="Body-shot" />
      </div>
      <div className="who-text-holder">
        <div className="who-text-title">
          Who is Harp?
        </div>
        <div className="who-text">
          I entered law school in 2008 just after finishing college. I was a mess. Addicted to Adderall, caffeine, nicotine, and marijuana, I had completely forgotten how to authentically exist in the world. The pressure of academic success led me to abandon myself. I finally hit rock bottom at the end of my first year of law school. I knew that I couldn’t keep living as a shell of a person. As I was coming to terms with the reality that I had spiraled into a hole of addiction and self-doubt, a friend suggested that I try yoga. During those dark times, yoga emerged as guiding light that brought me back into the sanctuary of my body, which I had been disconnected from for so many years. The practice of yoga showed me that there was a better way to live and that I didn’t have to depend on chemical substances to make it through the day. Inspired to take my practice deeper, I completed a 200-hour certification course through YogaWorks after my second year of law school. By the time I started my final year of law school, I felt more empowered than ever before. I no longer needed Adderall to study. I was able to fall asleep without marijuana, and most importantly, I felt a sense of aliveness and optimism that I hadn’t felt since I was a kid. After graduating from law school, I completed my certification in Kundalini Yoga and Meditation at the Kundalini Research Institute in New Mexico. I went on to work at law firms in LA and NYC until I made my way Upstate NY in 2016. There I started my own law practice while simultaneously operating a vegan food truck called The Giving Bowl. Not your average attorney, I know! When the pandemic hit, I decided that I needed a change. I closed down the food truck, moved to Santa Fe, New Mexico and obtained my certification in life coaching. Now I split my time between lawyering and life coaching. My prayer is to serve all my clients with an open mind and a vibrant heart.
        </div>
      </div>
    </div>
  );
};

export default withRouter((Who));
