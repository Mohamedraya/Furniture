import React from "react";
import { View,TouchableOpacity,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import ProductsListGrid from "../../components/productsgridview/ProductsListGrid";
import styles from "./newrivals.style";
import { COLORS } from "../../constant";


function NewRivals() {

    const navigation = useNavigation();

    return (
       <View style={styles.container}> 

        <View style={styles.upperRow}>
           <TouchableOpacity onPress={() => {navigation.goBack()}}>
                <Ionicons name="chevron-back-circle" size={30} color={COLORS.lightWhite}/>
           </TouchableOpacity>
           <Text style={styles.barTxt}>Product</Text>
        </View>

        <ProductsListGrid/>
      </View>  
    );
}

export default NewRivals;