import React from "react";
import { View,Text ,FlatList,ActivityIndicator} from "react-native";
import {ProductCard} from "../../components";
import useFetch from "../../hook/useFetch";
import styles from "./productslist.style";
import { COLORS } from "../../constant";



const ProductsList = () => {

    //const Products = [1,2,3,4];

    const {data,isLoading,error} = useFetch();

    return (
      <View style={styles.listView}>        
        {isLoading ? (<ActivityIndicator size={16} color={COLORS.primary}/>): error ? (<Text>{error.message}</Text>):
        
        <FlatList data={data} keyExtractor={(item) => item._id} renderItem={({item}) => <ProductCard item={item}/>} horizontal
                 contentContainerStyle={{columnGap: 16}}/>
        }
      </View>           
    );
}

export default ProductsList;