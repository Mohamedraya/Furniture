import React from "react";
import { View ,Text,TouchableOpacity,Image} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./productcard.style";



function ProductCard ({item}) {

    const navigation = useNavigation();

    return (
       <TouchableOpacity onPress={() => {navigation.navigate("ProductDetailsScreen",{item})}}>
          <View style={styles.container}>

             <View style={styles.imageContainer}>
                <Image source={{uri: item.imageUrl}} style={styles.image}/>
             </View>
             
             <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.supplier} numberOfLines={1}>{item.supplier}</Text>
                <Text style={styles.price}>${item.price}</Text>
             </View>

             <TouchableOpacity style={styles.addBtn}>
                <Ionicons name="add-circle" size={35}/>
             </TouchableOpacity>
          </View>
       </TouchableOpacity>
    );
}


export default ProductCard;