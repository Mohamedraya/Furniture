import React from "react";
import { View ,Text,TouchableOpacity,TextInput} from "react-native";
import {Feather,Ionicons} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./welcome.style";
import { COLORS } from "../../constant";


function Welcome () {

    const navigation = useNavigation();
    return (
       <View> 

         <View style={styles.container}>
           <Text style={styles.welcomeTxt}>Find The Most </Text>
           <Text style={styles.welcomeTxt}>luxurious Furniture</Text>
         </View>
        
         <View style={styles.searchContainer}>
             <TouchableOpacity>
                <Feather name="search" size={24} style={styles.searchIcon}/>
             </TouchableOpacity>
             <View style={styles.searchWrapper}>
                <TextInput value="" onPressIn={() => {navigation.navigate("Search")}} placeholder="What are looking for" style={styles.searchInput}/>
             </View>
             <TouchableOpacity style={styles.cameraBtn}>
                 <Ionicons name="camera-outline" size={30} color={COLORS.lightWhite}/>
             </TouchableOpacity>
         </View>

       </View>
    );
}

export default Welcome;