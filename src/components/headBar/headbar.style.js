import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constant";


const styles = StyleSheet.create({

    barWrapper: {
        marginHorizontal: 22,
        marginTop: 12
    },

    bar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    barTxt: {
        fontWeight: "bold",
        fontSize: SIZES.medium,
        color: COLORS.gray
    },

    cartWrapper: {
        alignItems: "flex-end"
    },

    cartNumberView: {
        position: "absolute",
        bottom: 16,
        width: 16,
        height: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
        zIndex: 999
    },

    cartNumberText: {
        
        fontWeight: "600",
        fontSize: 10,
        color: COLORS.lightWhite
    }
});


export default styles;