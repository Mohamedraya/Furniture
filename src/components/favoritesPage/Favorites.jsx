import React , {useState,useEffect} from "react";
import {View,TouchableOpacity,FlatList,Text} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Ionicons} from "@expo/vector-icons";
import FavoritesTile from "../favoritesTile/FavoritesTile";
import styles from "./favorites.style";
import { COLORS } from "../../constant";



const Favorites = () => {

    const [favData , setFavData] = useState([]);

    const navigation = useNavigation();

    useEffect(() => {
        checkFavorites();
    } , []);


    const checkFavorites = async () => {

        const id = await AsyncStorage.getItem("id");
        const favoritesId = `favorites${JSON.parse(id)}`
  
        try {
           const favoritesObj = await AsyncStorage.getItem(favoritesId);
  
           if (favoritesObj !== null) {
  
              const favorites = JSON.parse(favoritesObj);
              const favList   = Object.values(favorites); 
              setFavData(favList);
              //console.log(favList.length);
           }
        } catch (error) {
           
        }
      }   
    
    return (
       <SafeAreaView style={styles.container}>

          <View style={styles.titleRow}>
              <TouchableOpacity onPress={() => {navigation.goBack()}}>
                 <Ionicons name="chevron-back-circle" size={30} color={COLORS.primary}/>
              </TouchableOpacity> 
              <Text style={styles.titleTxt}>Favorites</Text>
          </View>

          <FlatList data={favData} keyExtractor={(item) => item.id} renderItem={({item}) => (<FavoritesTile item={item} CheckFavorites={checkFavorites()}/>)}/>

       </SafeAreaView>
    );

}


export default Favorites;