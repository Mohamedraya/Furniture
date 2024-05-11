import { StyleSheet } from "react-native";
import { COLORS ,SIZES } from "../../constant";


const styles = StyleSheet.create({

    searchContainer: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        margin: SIZES.medium,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 50
    },

    cameraIcon: {
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

    searchBtn: {
        width: 50,
        height: "100%",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.primary
    },

    img: {
        resizeMode: "contain",
        width: SIZES.width - 100,
        height: SIZES.height - 300
    }
});


export default styles;