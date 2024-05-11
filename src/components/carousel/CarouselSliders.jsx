import React from "react";
import { View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constant";
import styles from "./carousel.style";



const CarouselSliders = () => {

    const slides = [
        
        "https://d326fntlu7tb1e.cloudfront.net/uploads/b1f6d96d-3297-4270-ba65-657dc2bc0236-fn2.jpg",
        'https://www.ikea.com/eg/en/images/products/songesand-bedroom-furniture-set-of-4-brown__1102154_pe866532_s5.jpg?f=s',
        'https://w7.pngwing.com/pngs/625/18/png-transparent-brown-wooden-bedroom-furniture-set-art-bedside-tables-metal-furniture-couch-furniture-angle-furniture-drawer.png',
        
       
    ]

    return(
       <View>

          <SliderBox images={slides} dotColor= {COLORS.primary} inactiveDotColor={COLORS.secondary}
                     ImageComponentStyle={{borderRadius: 15, width: "90%" , marginTop: 15}}
                     autoplay circleLoop/>
       </View>
    );
}

export default CarouselSliders;