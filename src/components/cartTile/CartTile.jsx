import React from "react";
import {View,Text,TouchableOpacity,Image} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import styles from "./carttile.style";
import { COLORS } from "../../constant";


const CartTile = ({item,onPress,select}) => {

    return (
        <TouchableOpacity style={styles.container(select === false ? "#fff" : COLORS.secondary)} onPress={onPress}>

           <View style={styles.imgView}>
              <Image source={{uri: item.imageUrl}} style={styles.productImg}/>
           </View>

           <View style={styles.txtContainer}>
               <Text style={styles.titleTxt}>{item.title}</Text>
               <Text style={styles.supplier}>{item.supplier}</Text>
               <Text style={styles.supplier}>{item.price} * {item.quantity}</Text>
           </View>

           <TouchableOpacity onPress={() => {}}>
               <AntDesign name="delete" size={18} color="red"/>
           </TouchableOpacity>
        </TouchableOpacity>
    );
}


export default CartTile;