import React , {useState,useEffect}from "react";
import {View,Text,Image,TouchableOpacity,Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {AntDesign , MaterialCommunityIcons , SimpleLineIcons} from "@expo/vector-icons";
import { COLORS } from "../../constant/theme";
import styles from "./profile.style";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Profile = () => {

    const [userData , setUserData]   = useState({});
    const [userLogin , setUserLogin] = useState(false);

    const navigation = useNavigation();

    
    const userLogout = async () => {

         const id = await AsyncStorage.getItem("id");
         const userId = `user${JSON.parse(id)}`;

         try {
            await AsyncStorage.multiRemove([userId , "id"]);
            navigation.replace("Bottom Navigation");
         } 
         catch (error) {
            console.log("Error Loggin out the user" , error);
         }
    };

    const Logout = () => {

       Alert.alert("Logout" , "Are you sure you want to logout?" , 
       [{text: "cancel" , onPress: () => console.log("Cancel Pressed")}
        ,{text: "continue" , onPress: () => userLogout()}
        ]);
    }

    const cacheClear = async () => {

        const id = await AsyncStorage.getItem("id");
        const userId = `favorites${JSON.parse(id)}`;

        try {
            await AsyncStorage.removeItem(userId);
            navigation.replace("Bottom Navigation");
        } 
        catch (error) {
            
        }
    }

    const ClearCache = () => {

        Alert.alert("Clear Cache" , "Are You sure you want to Delete All Save Data On Your Device" , 
        [{text: "Cancel" , onPress: () => console.log("Cancel Pressed")},
         {text: "Clear Cache" , onPress: () => cacheClear()}
         ]);
    }

    const DeleteAccount = () => {
        Alert.alert("Delete Account" , "Are You sure you want to Delete Account?" ,
                     [
                        {text: "Cancel" , onPress: () => console.log("Cancel Pressed")},
                        {text: "Delete Account" , onPress: () => console.log("Cancel Pressed")} 
                     ]);
    }

    const checkExistingUser = async () => {

        const id = await AsyncStorage.getItem("id");
        const userId = `user${JSON.parse(id)}`;

        try {
            const currentUser = await AsyncStorage.getItem(userId);

            if (currentUser) {

                const parsedData = JSON.parse(currentUser);
                setUserData(parsedData);
                setUserLogin(true);
            }
            else {
                navigation.navigate("LoginScreen");
            }
        } 
        catch (error) {
            console.log("Error Retrieving the data" , error);
        } 
    };

    useEffect(() => {
        checkExistingUser();
    } , []);

    return (
        <View style={styles.container}>

            

            <View style={styles.profileContainer}>
                 <Image source={require("../../../src/assets/images/profile.jpeg")} style={styles.profileImg}/>
                <Text style={styles.name}>{userLogin ? userData.username : "Please Login Into Your Account"}</Text>
                {userLogin === false ? (
                    <TouchableOpacity style={styles.loginBtn} onPress={() => {navigation.navigate("LoginScreen")}}>
                        <View>
                           <Text style={styles.btnTxt}>Go To Login</Text>
                        </View>               
                    </TouchableOpacity>
                ) :(
                    <View style={styles.loginBtn}>
                        <Text style={styles.name}>{userData.email}</Text>
                    </View>
                )
                  }   

                  {userLogin === false ? (<View></View>)
                                       : 
                  (<View style={styles.menuWrapper}>
                      <TouchableOpacity onPress={() => {navigation.navigate("FavoritesScreen")}}>
                          <View style={styles.menuItem}>
                            <MaterialCommunityIcons name="heart-outline" color={COLORS.primary} size={24}/>
                            <Text style={styles.menuText}>Favorites</Text>
                          </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => {navigation.navigate("OrdersScreen")}}>
                          <View style={styles.menuItem}>
                            <MaterialCommunityIcons name="truck-delivery-outline" color={COLORS.primary} size={24}/>
                            <Text style={styles.menuText}>Orders</Text>
                          </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => {navigation.navigate("CartScreen")}}>
                          <View style={styles.menuItem}>
                            <MaterialCommunityIcons name="cart-outline" color={COLORS.primary} size={24}/>
                            <Text style={styles.menuText}>Cart</Text>
                          </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => {ClearCache()}}>
                          <View style={styles.menuItem}>
                            <MaterialCommunityIcons name="cached" color={COLORS.primary} size={24}/>
                            <Text style={styles.menuText}>Clear Cache</Text>
                          </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => {DeleteAccount()}}>
                          <View style={styles.menuItem}>
                            <AntDesign name="deleteuser" color={COLORS.primary} size={24}/>
                            <Text style={styles.menuText}>Delete Account</Text>
                          </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => {Logout()}}>
                          <View style={styles.menuItem}>
                            <AntDesign name="logout" color={COLORS.primary} size={24}/>
                            <Text style={styles.menuText}>Logout</Text>
                          </View>
                      </TouchableOpacity>
                  </View>)
                  } 
                
            </View>
        </View>
    );
}


export default Profile;