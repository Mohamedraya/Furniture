import React from "react";
import { TouchableOpacity, View , Image , StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {COLORS} from "../../constant/theme";


const BackBtn = ({onPress}) => {

    return (
       <TouchableOpacity onPress={onPress} style={styles.btn}>
           <Ionicons name="chevron-back-circle" size={30} color={COLORS.primary}/>
       </TouchableOpacity>
    );
}


const styles = StyleSheet.create({

    btn: {
        position: "absolute",
        marginTop: 40,
        zIndex: 999
    }
});

export default BackBtn;

