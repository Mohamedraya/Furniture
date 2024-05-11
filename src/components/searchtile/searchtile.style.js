import { StyleSheet } from "react-native";
import { COLORS,SIZES,SHADOWS } from "../../constant";


const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 12,
        marginBottom: 12,
        padding: 16,
        ...SHADOWS.medium,
        shadowColor: COLORS.lightWhite
    },

    imgView: {
        width: 70,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: 16
    },

    productImage: {
        width: "100%",
        height: 60,
        borderRadius: 12,
        resizeMode: "cover"
    },

    txtContainer: {
        flex: 1,
        marginHorizontal: 16
    },

    productTitle: {
        fontSize: 22,
        color: COLORS.primary
    },

    supplier: {
        fontSize: 16,
        color: COLORS.gray,
        marginTop: 3
    }
});


export default styles;