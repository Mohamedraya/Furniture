import { StyleSheet } from "react-native";
import {COLORS, SIZES} from "../../constant";



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },

    safeAreaStyle: {
        flex: 1,
        backgroundColor: "white"
    },

    upperRow: {
        position: "absolute",
        margin: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width -44,
        top: SIZES.large,
        zIndex: 999
    },

    img: {
        aspectRatio: 1,
        resizeMode: 'cover'
    },

    details: {
        marginTop: -SIZES.large,
        width: SIZES.width,
        backgroundColor: COLORS.lightWhite,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        
    },

    titleRow: {
        marginHorizontal: 20,
        paddingBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width -44,
        top: 20,
        height: 50
    },

    title: {
        fontWeight: "bold",
        fontSize: 22,
    },

    priceWrapper: {
        backgroundColor: COLORS.secondary,
        borderRadius: 16
    },

    price: {
        paddingHorizontal: 6,
        fontWeight: "bold",
        fontSize: 16
    },

    ratingRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width -10,
        top: 5
    },

    rating: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal: 16,
        marginTop: 10
    },

    ratingTxt: {
        color: COLORS.gray,
        paddingHorizontal: 7
    },

    descriptionWrapper: {
        margin: 14,
    },

    description: {
        
        fontSize: 18
    },

    descText: {
        fontSize: 16
    },

    location: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.secondary,
        padding: 5,
        borderRadius: 16,
        marginHorizontal: 12
    },

    cartRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        width: SIZES.width -44,
        paddingBottom: 12
    },

    cartBtn: {
        justifyContent: "center",
        alignItems: "center",
        width: SIZES.width * 0.7,
        backgroundColor: "black",
        borderRadius: 16,
        padding: 12,
        marginLeft: 12
    },

    btnText: {
        fontWeight: "bold",
        fontSize: 16,
        color: COLORS.lightWhite
    },

    addCart: {
        width: 37,
        height: 37,
        backgroundColor: "black",
        borderRadius: 50,
        marginLeft: 55,
        justifyContent: 'center',
        alignItems: "center"
    }
});


export default styles;