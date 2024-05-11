import React from "react";
import {View , Text , TouchableOpacity} from "react-native";
import styles from "./button.style";
import { COLORS } from "../../constant/theme";


const Button = ({title,onPress,isValid}) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.loginBtn(isValid === false ? COLORS.gray : COLORS.primary)}>
            <Text style={styles.btnTxt}>{title}</Text>
        </TouchableOpacity>
    );
}


export default Button;