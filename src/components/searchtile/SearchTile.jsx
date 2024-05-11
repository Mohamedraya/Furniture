import React from "react";
import {View,Text,TouchableOpacity,Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./searchtile.style";


function SearchTile ({item}) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => {navigation.navigate("ProductDetails",{item})}}>
           <View style={styles.imgView}>
              <Image source={{uri: item.imageUrl}}/>
           </View>

           <View style={styles.txtContainer}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.supplier}>{item.supplier}</Text>
              <Text style={styles.supplier}>{item.price}</Text>
           </View>
        </TouchableOpacity>
    );
}

export default SearchTile;