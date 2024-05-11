import { StyleSheet } from "react-native";
import { COLORS , SIZES } from "../../constant/theme";


const styles = StyleSheet.create({

    loginCover: {
        width: SIZES.width - 60,
        height: SIZES.height / 3,
        resizeMode: "contain",
        marginBottom: 20
    },

    title: {
        fontWeight: "bold",
        fontSize: 24,
        color: COLORS.primary,
        alignSelf: "center",
        marginBottom: 16
    },

    wrapper: {
        marginBottom: 20
    },

    label: {
        fontSize: 16,
        marginBottom: 10
    },

    input: (borderColor) => ({
        flexDirection: "row",
        backgroundColor: COLORS.lightWhite,
        height: 50,
        borderRadius: 16,
        borderColor: borderColor,
        borderWidth: 1,
        alignItems: "center",
        paddingHorizontal: 15
    }),

    icon: {
        marginRight: 5
    },

    errorMessage: {
        color: COLORS.red,
        fontSize: 16,
        marginTop: 5,
        marginLeft: 5
    },

    register: {
        fontSize: 20,
        textAlign: "center",
        marginTop: 20
    }
});


export default styles;