import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import Typography from "@material-ui/core/Typography";
// import image1 from "../../assets/imgs/bg2.jpg";
// import image2 from "../../assets/imgs/bg3.jpg";
// import image3 from "../../assets/imgs/bg7.jpg";

const photos = [
  {
    src: "http://estacionagroambientalarupacha.com/gallery/1.jpg",
    width: 3,
    height: 4
  },
  {
    src: "http://estacionagroambientalarupacha.com/gallery/2.jpg",
    width: 3,
    height: 4
  },
  {
    src: "http://estacionagroambientalarupacha.com/gallery/3.jpg",
    width: 4,
    height: 3
  },
  {
    src: "http://estacionagroambientalarupacha.com/gallery/4.jpg",
    width: 3,
    height: 4
  },
  {
    src: "http://estacionagroambientalarupacha.com/gallery/6.jpg",
    width: 4,
    height: 3
  },
  {
    src: "http://estacionagroambientalarupacha.com/gallery/5.jpg",
    width: 3,
    height: 4
  },
  {
    src: "http://estacionagroambientalarupacha.com/gallery/7.jpg",
    width: 4,
    height: 3
  },
  {
    src: "http://estacionagroambientalarupacha.com/gallery/8.jpg",
    width: 3,
    height: 4
  },
  {
    src: "http://estacionagroambientalarupacha.com/gallery/9.jpg",
    width: 3,
    height: 4
  }
  ,
  {
    src: "http://estacionagroambientalarupacha.com/gallery/10.jpg",
    width: 3,
    height: 4
  },
  {
    src: "http://estacionagroambientalarupacha.com/gallery/11.jpg",
    width: 3,
    height: 4
  },
  {
    src: "http://estacionagroambientalarupacha.com/gallery/12.jpg",
    width: 4,
    height: 3
  }
];

export class HomeGallery extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="container2">
          <Typography
            className="title"
            component="h2"
            variant="h1"
            gutterBottom
          >
            GALERÍA
          </Typography>
          <Gallery photos={photos} onClick={this.openLightbox} />
          <Lightbox
            images={photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
        </div>
      </div>
    );
  }
}
