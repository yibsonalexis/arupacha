
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


export default class SimpleSlider extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const styles = {
            gridContainer: {
                marginRight: "-15px",
                marginLeft: "-15px",
                width: "auto",
                height:'100px',
            },
            gridItem: {
                position: "relative",
                width: "100%",
                minHeight: "1px",
                paddingRight: "15px",
                paddingLeft: "15px",
                flexBasis: "auto",
                marginLeft: "auto !important",
                marginRight: "auto !important"
            },
            card: {
                maxWidth: 345,
            },
            media: {
                height: 800,
            },
            section: {
                padding: "70px 0"
            },
            container: {
                // paddingRight: "15px",
                // paddingLeft: "15px",
                marginRight: "auto",
                marginLeft: "auto",
                width: "100%",
                "@media (min-width: 576px)": {
                    maxWidth: "540px"
                },
                "@media (min-width: 768px)": {
                    maxWidth: "720px"
                },
                "@media (min-width: 992px)": {
                    maxWidth: "960px"
                },
                "@media (min-width: 1200px)": {
                    maxWidth: "1140px"
                }

            },
            marginAuto: {
                marginLeft: "auto !important",
                marginRight: "auto !important"
            }
        };

        return (
            <div>
{/* 
                <Slider {...settings}>
                    <div >
                        <img src={image1} />
                    </div>
                    <div>
                    <img src={image2} />
                    </div>
                    <div>
                    <img src={image3} />
                    </div>
                    </Slider> */}

                    <Card style={styles.container}>
                        <CardActionArea style={styles.media}>
                        <img src={image3} style={{width:'100%'}}/>
                        </CardActionArea>
                    </Card>
                </div>
        );
    }
}


