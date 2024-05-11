import React , {useState,useEffect}from "react";
import {Text,View,TouchableOpacity, ScrollView} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Ionicons,Fontisto} from "@expo/vector-icons";
import styles from "./headbar.style";



const HeadBar = () => {

    const [userData , setUserData] = useState({});


    const checkUserLocation = async () => {

        const id = await AsyncStorage.getItem("id");
        const userId = `user${JSON.parse(id)}`;

        try {
            const currentUser = await AsyncStorage.getItem(userId);

            if (currentUser) {

                const parsedData = JSON.parse(currentUser);
                setUserData(parsedData);
            }
            
        } 
        catch (error) {
            console.log("Error Retrieving the data" , error);
        }
    };

    useEffect(() => {
        checkUserLocation();
    } , []);

    return (
        <View style={styles.barWrapper}>
           
           <View style={styles.bar}>
               <Ionicons name="location-outline" size={24}/>
               <Text style={styles.barTxt}>{userData ? userData.location : "Shoubra"}</Text>
               <View style={styles.cartWrapper}>
                  <View style={styles.cartNumberView}>
                      <Text style={styles.cartNumberText}>16</Text>
                  </View>
                  <TouchableOpacity>
                     <Fontisto name="shopping-bag" size={24}/>
                  </TouchableOpacity>
               </View>
           </View>
        </View>
    );
} 


export default HeadBar;