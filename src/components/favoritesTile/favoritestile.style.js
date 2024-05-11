import { StyleSheet } from "react-native";
import { COLORS , SHADOWS} from "../../constant";



const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12,
        marginBottom: 12,
        borderRadius: 12,
        backgroundColor: COLORS.lightWhite,
        ...SHADOWS.medium,
        shadowColor: COLORS.secondary
    },

    imgView: {
        width: 70,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        backgroundColor: COLORS.gray
    },

    productImg: {
        width: "100%",
        height: 60,
        borderRadius: 16,
        resizeMode: "cover"
    },

    txtContainer: {
        flex: 1,
        marginHorizontal: 12
    },

    titleTxt: {
        fontWeight: "bold",
        fontSize: 20,
        color: COLORS.primary
    },

    supplier: {
        color: COLORS.gray,
        fontSize: 14
    }
});


export default styles;