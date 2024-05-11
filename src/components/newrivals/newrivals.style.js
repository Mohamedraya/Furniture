import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constant";



const styles = StyleSheet.create({

    container: {
       flex: 1,
       backgroundColor: COLORS.lightWhite
    },

    upperRow: {
        position: "absolute",
        width: SIZES.width - 50,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: COLORS.primary,
        borderRadius: 16,
        top: 35,
        zIndex: 999
    },

    barTxt: {
        fontWeight: "700",
        fontSize: 18,
        color: COLORS.lightWhite,
        marginLeft: 10  
    }
});


export default styles;