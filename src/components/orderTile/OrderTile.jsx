import React from "react";
import {View,Text,TouchableOpacity} from "react-native";


const OrderTile = ({item}) => {

    return (
        <TouchableOpacity style={styles.container} >

           <View style={styles.imgView}>
              <Image source={{uri: item.imageUrl}} style={styles.productImg}/>
           </View>

           <View style={styles.txtContainer}>
               <Text style={styles.titleTxt}>{item.productId.title}</Text>
               <Text style={styles.supplier}>{item.productId.supplier}</Text>
               <Text style={styles.supplier}>{item.productId.price} </Text>
           </View>

           <View style={styles.pay}>
             <Text>{item.payment_status}</Text>
           </View>
        </TouchableOpacity>
    );
}


export default OrderTile;