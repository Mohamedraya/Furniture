import React , {useState}from "react";
import { View ,Text,TouchableOpacity,TextInput, FlatList,Image} from "react-native";
import {Feather,Ionicons} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import SearchTile from "../searchtile/SearchTile";
import styles from "./search.style";
import { COLORS } from "../../constant";



const SearchPage = () => {

    const [searchKey , setSearchKey] = useState("");
    const [searchResult, setSearchResult] = useState([]);



    const handleSearch = async () => {

      try {
        const result = await axios.get(`http://10.0.2.2:3000/api/products/search/${searchKey}`);
        console.log("==================");
        console.log(result.data);
        console.log("==================");
        setSearchResult(result.data);
      } 
      catch (error) {
        console.log("Failed to get product",error);
      }
    }

    return (
     <> 
      <View style={styles.searchContainer}>
        <TouchableOpacity>
           <Ionicons name="camera-outline" size={24} style={styles.cameraIcon}/>
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
           <TextInput value={searchKey} onChangeText={setSearchKey} placeholder="What are looking for" style={styles.searchInput}/>
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => handleSearch()}>
            <Feather name="search" size={25} color={COLORS.lightWhite}/>
        </TouchableOpacity>
      </View>

      {searchResult.length === 0 ? (<View style={{flex: 1}}><Image source={require("../../../src/assets/images/Pose23.png")} style={styles.img}/></View>)
                                 : (<FlatList data={searchResult} keyExtractor={(item) => item._id} renderItem={({item}) => (<SearchTile item={item}/>)} style={{}}/>)}
     </>      
    );
}

export default SearchPage;


