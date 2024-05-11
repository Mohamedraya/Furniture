import React from "react";
import {View,Text,Image,TouchableOpacity} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import styles from "./favoritestile.style";
import AsyncStorage from "@react-native-async-storage/async-storage";




const FavoritesTile = ({item,CheckFavorites}) => {



    const deleteFavorites = async (productid) => {
        const id = await AsyncStorage.getItem("id");
        const favoritesId = `favorites${JSON.parse(id)}`

        let productId = productid;
 
        try {
           const existingItem = await AsyncStorage.getItem(favoritesId);
           let favoritesObj   = existingItem ? JSON.parse(existingItem) : {};
           
           if (favoritesObj[productId]) {

              delete favoritesObj[productId];             
              CheckFavorites;
           }

           await AsyncStorage.setItem(favoritesId , JSON.stringify(favoritesObj));
        } 
        catch (error) {
         
        }
        
    }

    return (
        <View style={styles.container}>

            <View style={styles.imgView}>
                <Image source={{uri: item.imageUrl}} style={styles.productImg}/>
            </View>

            <View style={styles.txtContainer}>
                <Text style={styles.titleTxt}>{item.title}</Text>
                <Text style={styles.supplier}>{item.supplier}</Text>
                <Text style={styles.supplier}>{item.price}</Text>
            </View>
            
            <TouchableOpacity onPress={() => {deleteFavorites(item.id)}}>
                <AntDesign name="delete" size={24} color= "red"/>
            </TouchableOpacity>
        </View>
    );
}


export default FavoritesTile;