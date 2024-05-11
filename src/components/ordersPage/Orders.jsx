import React from "react";
import {View,Text,TouchableOpacity,FlatList,ActivityIndicator} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import { COLORS } from "../../constant";
import OrderTile from "../orderTile/OrderTile";
import getOrders from "../../hook/getOrders";
import styles from "./orders.style";



const Orders = () => {

    const {data , loading , error} = getOrders();

    console.log(data);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
           
           <View style={styles.titleRow}>
               <TouchableOpacity onPress={() => {navigation.goBack()}}> 
                  <Ionicons name="chevron-back-circle" size={30} color={COLORS.primary}/>
               </TouchableOpacity>

               <Text style={styles.titleTxt}>My Orders</Text>
           </View>

           {loading ? (<ActivityIndicator size={16} color={COLORS.primary}/>) : error ? (<Text>{error.message}</Text>) :

             <FlatList data={data} keyExtractor={(item) => item._id} 
                       renderItem={({item}) => (<OrderTile item={item}/>)}/>}

        </SafeAreaView>   
    );
}


export default Orders;