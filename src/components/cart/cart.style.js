import { StyleSheet } from "react-native";
import { SIZES } from "../../constant";



const styles = StyleSheet.create({

    container: {
        
        marginTop: 20,
        marginHorizontal: 20
    },

    titleRow: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: SIZES.width - 50,
        marginBottom: 20
    },

    titleTxt: {
        fontWeight: "bold",
        fontSize: 25,
        letterSpacing: 4,
        marginLeft: 7
    }
});


export default styles;