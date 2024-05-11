import { StyleSheet } from "react-native";
import { COLORS } from "../../constant";


const styles = StyleSheet.create({

    container: {
        width: 182,
        height: 220,
        borderRadius: 16,
        backgroundColor: COLORS.secondary,
        marginHorizontal: 10
    },

    imageContainer: {
        flex: 1,
        width: 182,
        borderRadius: 16,
        overflow: "hidden"
    },

    image: {
        resizeMode: "cover",
        aspectRatio: 1
    },

    details: {
        padding: 12
    },

    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 2
    },

    supplier: {
        fontSize: 17,
        color: COLORS.gray
    },

    price: {
        fontSize: 14,
        fontWeight: "bold"
    },

    addBtn: {
        position: "absolute",
        bottom: 12,
        right: 12
    }
});


export default styles;