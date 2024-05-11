import { StyleSheet } from "react-native";
import { COLORS ,SIZES } from "../../constant";


const styles = StyleSheet.create({

    container: {
        width: "100%"
    },

    welcomeTxt:{
        fontWeight: "bold",
        fontSize: 38,
        color: COLORS.black,
        marginTop: 10,
        marginHorizontal: 12
    },

    searchContainer: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        margin: SIZES.medium,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 50
    },

    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray
    },

    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.small,
        marginRight: SIZES.small
    },

    searchInput: {
        
        paddingHorizontal: SIZES.small
    },

    cameraBtn: {
        width: 50,
        height: "100%",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.primary
    }
});

export default styles;