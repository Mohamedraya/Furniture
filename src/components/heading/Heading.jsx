import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {AntDesign} from "@expo/vector-icons";
import { COLORS } from "../../constant";
import styles from "./heading.style";



const Heading = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
           <View style={styles.header}>
              <Text style={styles.headerTitle}>New Rivals</Text>
              <TouchableOpacity onPress={() => {navigation.navigate("ProductList")}}>
                 <AntDesign name="database" size={24} color={COLORS.primary}/>
              </TouchableOpacity>
           </View>
        </View>
    );
}


export default Heading;