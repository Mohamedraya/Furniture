import React from "react";
import { View,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductDetail } from "../../components";


function ProductDetailsScreen () {

    return (
      <SafeAreaView>
        <ProductDetail/>
      </SafeAreaView> 
    );
}

export default ProductDetailsScreen;