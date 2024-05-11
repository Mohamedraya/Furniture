import React from "react";
import {View,Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NewRivals from "../../components/newrivals/NewRivals";
import styles from "./NewRivalsScreen.style";



function NewRivalsScreen() {

    return (
        <SafeAreaView style={styles.container}>
           <NewRivals/>
        </SafeAreaView>
    );
}


export default NewRivalsScreen;