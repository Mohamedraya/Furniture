import React from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import useFetch from "../../hook/useFetch";
import styles from "./productslistgrid.style";
import { COLORS } from "../../constant";
import ProductCard from "../product/ProductCard";


function ProductsListGrid() {

    const {data,isLoading,error} = useFetch();

    return (
        <>
           {isLoading ? (<View style={styles.inducatorView}><ActivityIndicator size={20} color={COLORS.primary}/></View>) : error ? (<Text>Something Went Wrong</Text>):
           
            <View style={styles.container}>
                <FlatList data={data} keyExtractor={(item) => item._id} numColumns={2} renderItem={({item}) => <ProductCard item={item}/>}
                          ItemSeparatorComponent={() => <View style={styles.separator}/>}/>
            </View>
           }
       </> 
    );
}


export default ProductsListGrid;