
import React, { Component } from "react";
import Slider from "react-slick";
import Carousel from "react-slick";
import image1 from "../../assets/imgs/bg2.jpg";
import image2 from "../../assets/imgs/bg3.jpg";
import image3 from "../../assets/imgs/bg7.jpg";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Grid from "@material-ui/core/Grid";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

export default class SimpleSlider extends Component {

    render() {
        console.log(window.screen.height + ' ' + window.screen.availHeight);
        const heightScreem = (window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight)

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };

        const styles = {

        };

        return (
            <div>

                <Carousel {...settings}>
                    <div style={styles.container}>
                        <img src={image1} style={{width:'100%', minWidth:'1080px', height:heightScreem+'px'}}/>
                    </div>
                    <div style={styles.container}>
                        <img src={image2} style={{width:'100%', minWidth:'1080px', height:heightScreem+'px'}}/>
                    </div>
                    <div style={styles.container}>
                        <img src={image3} style={{width:'100%', minWidth:'1080px', height:heightScreem+'px'}}/>
                    </div>
                </Carousel>

                    
                </div>
        );
    }
}


