import React from "react";
// import { HomeSection } from "../components/homeSection/homeSection";
import { HomeSlider } from "../components/homeSlider/homeSlider";
import { HomeServices } from "../components/homeServices/homeServices";
import { HomeSection2 } from "../components/homeSection2/homeSection2";
import { Footer } from "../components/footer/footer";
import { HomeGallery } from "../components/homeGallery/homeGallery";
import { HomeContact } from "../components/homeContact/homeContact";

export const Home = props => {
  return (
    <div style={styles.home}>
      <HomeSlider />
      {/* <HomeSection>
                
            </HomeSection> */}

      <HomeSection2 />
      <HomeServices />
      <HomeContact />
      <HomeGallery />
      <Footer />
    </div>
  );
};
const styles = {
  home: {}
};
