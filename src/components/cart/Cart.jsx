import React , {useState}from "react";
import {View,Text,TouchableOpacity,ActivityIndicator,FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import getCart from "../../hook/getCart";
import CartTile from "../cartTile/CartTile";
import styles from "./cart.style";
import { COLORS } from "../../constant";
import useFetch from "../../hook/useFetch";
import Button from "../button/Button";



const Cart = () => {

    const {data , loading ,error}  = getCart();
    const [selected , setSelected] = useState(null);
    const [select , setSelect] = useState(false);

    const navigation = useNavigation();
    console.log(selected);
    return (
        <SafeAreaView style={styles.container}>
           
           <View style={styles.titleRow}>
               <TouchableOpacity onPress={() => {navigation.goBack()}}> 
                  <Ionicons name="chevron-back-circle" size={30} color={COLORS.primary}/>
               </TouchableOpacity>

               <Text style={styles.titleTxt}>My Cart</Text>
           </View>

           {loading ? (<ActivityIndicator size={16} color={COLORS.primary}/>) : error ? (<Text>{error.message}</Text>) :

             <FlatList data={data} keyExtractor={(item) => item._id} 
                       renderItem={({item}) => (<CartTile item={item} onPress={() => {setSelect(!select),setSelected(item)}} select={select}/>)}/>}

          
          {select === false ? <View></View> : <Button title={"CheckOut"} isValid={select} onPress={() => {}}/>}
        </SafeAreaView>
    );
}

export default Cart;