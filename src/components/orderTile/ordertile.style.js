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
        backgroundColor: "#fff",
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
        fontSize: 26,
        color: COLORS.primary
    },

    supplier: {
        fontSize: 14,
        color: COLORS.gray,
        marginTop: 3,
        textTransform: "capitalize"
    },

    pay: {
        backgroundColor: COLORS.lightWhite,
        paddingHorizontal: 12,
        borderRadius: 12
    }
});

export default styles;