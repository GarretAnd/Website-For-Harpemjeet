/* eslint-disable max-len */
import React from 'react';
import { withRouter } from 'react-router-dom';
import Heart from '../img/soloHeart.svg';

const What = (props) => {
  return (
    <div className="what-page">
      <div className="what-page-left">
        <div className="what-page-title">
          What is Vibrant Heart Coaching?
        </div>
        <div className="what-page-text">
          Vibrant Heart Coaching helps you uncover the clarity, energy and joy that comes from living with a vibrant heart.  So often we feel pressured, whether by friends, family or society to present ourselves in an “acceptable” manner or to hold back certain parts of ourselves so as not to make others feel uncomfortable. Over time, this suppression wears on us and creates a lethargy of spirit. Through Vibrant Heart Coaching, you will be guided to a deeper understanding of yourself and the ways in which your heart desires to express itself.
        </div>
        <div className="what-page-title">
          How is life coaching different from therapy?
        </div>
        <div className="what-page-text">
          What you want to achieve. Therapy, on the other hand, focuses on the past and overcoming the trauma and pain associated with prior events. Both are equally valuable. Whether you need a life coach or a therapist really depends on what you are looking to accomplish. The two also are not mutually exclusive and work together side by side to take your life to a deeper level of authenticity. Marcia Reynolds, author of The Discomfort Zone, defines life coaches as “thinking partners focused on helping their clients use their creativity and resources to see beyond their blocks and solve their own problems.” As a life coach, my job is not to dispense advice or give you answers to your challenges. Rather, my goal is to walk alongside you, holding space without an agenda and posing thought provoking questions that will lead to your next incredible breakthrough.
        </div>
      </div>
      <div className="what-page-right">
        <div className="rate-box-title">
          <span>Rates</span>
        </div>
        <div className="rate-box">
          <div className="rate-box-text">
            30 Min Consultation:
          </div>
          <div className="rate-box-text-answer">
            <b>Free</b>
          </div>
          <div className="rate-box-text">
            60 Min Session:
          </div>
          <div className="rate-box-text-answer">
            $75.00
          </div>
          <div className="rate-box-text">
            5 x 60 Min Sessions:
          </div>
          <div className="rate-box-text-answer">
            $350.00
          </div>
          <div className="rate-box-text">
            10 x 60 Min Sessions:
          </div>
          <div className="rate-box-text-answer">
            $650.00
          </div>
        </div>
        <div className="what-page-logo-holder">
          <img src={Heart} alt="heart" />
        </div>
      </div>
    </div>
  );
};

export default withRouter((What));
