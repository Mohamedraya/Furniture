import { StyleSheet } from "react-native";
import {COLORS, SIZES} from "../../constant/theme";



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },

    coverImg: {
        width: "100%",
        height: 290,
        resizeMode: "cover"
    },

    profileContainer: {
        alignItems: "center",
        marginTop: 200
    },

    profileImg: {
        width: 155,
        height: 155,
        borderRadius: 999,
        borderColor: COLORS.primary,
        borderWidth: 3,
        resizeMode: "cover",
        marginTop: -90
    },

    name: {
       fontWeight: "bold",
       fontSize: 21,
       marginVertical: 5
    },

    btnTxt: {
        fontWeight: "bold",
        fontSize: 21,
        color: COLORS.white,
        marginVertical: 5
    },

    loginBtn: {
        
        height: 50,
        backgroundColor: COLORS.secondary,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        padding: 2
    },

    menuText: {
        color: COLORS.gray,
        marginLeft: 20,
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 26
    },

    menuWrapper: {
        marginTop: 20,
        width: SIZES.width - 20,
        
    },

    menuItem: {
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderColor: COLORS.gray,
        paddingHorizontal: 30,
        paddingVertical: 15
    }
});


export default styles;