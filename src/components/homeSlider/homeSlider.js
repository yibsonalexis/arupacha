
import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/imgs/bg2.jpg";
import image2 from "../../assets/imgs/bg3.jpg";
import image3 from "../../assets/imgs/bg7.jpg";
import "../../assets/css/reactSlick.css";

export const HomeSlider = props => {
    const heightScreem = (window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight)

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
    };
    return (
      <div>
        <Slider {...settings}>
          <div style={styles.container}>
            <img alt="" src={image1} style={{ width: '100%', minWidth: '1080px', height: heightScreem + 'px' }} />
          </div>
          <div style={styles.container}>
            <img alt=""  src={image2} style={{ width: '100%', minWidth: '1080px', height: heightScreem + 'px' }} />
          </div>
          <div style={styles.container}>
            <img alt=""  src={image3} style={{ width: '100%', minWidth: '1080px', height: heightScreem + 'px' }} />
          </div>
        </Slider>
      </div>
    );
  }

const styles = {

};


