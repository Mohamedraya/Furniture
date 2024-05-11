import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constant/theme";


const styles = StyleSheet.create({

    loginBtn: (backgroundColor) => ({
        width: "100%",
        height: 50,
        backgroundColor: backgroundColor,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: "white",
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center"
    }),

    btnTxt: {
        fontWeight: "bold",
        color: "white",
        fontSize: 20
    }
});


export default styles;