import React from 'react';
import handIcon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_image from '../../assets/hero_image.png'
import './Hero.css'

export default function Hero() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const onClickHandler = () => {
    // localStorage.clear()
  }
  return (
    <div className='hero'>
      <div className="hero_left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="left_hand_icon">
            <p>New</p>
            <img src={handIcon} alt="" />
          </div>
          <p>Collections</p>
          <p>for Everyone</p>
        </div>
        <div>
          <div className="hero_leatest_btn">
            <div onClick={onClickHandler}>{isLoggedIn === 'true' ? 'ture' : 'false'}</div>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
      </div>
      <div className="hero_right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}
