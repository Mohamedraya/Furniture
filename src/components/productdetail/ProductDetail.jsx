import React ,{useState,useEffect}from "react";
import {View,Text,TouchableOpacity,Image,Alert} from "react-native";
import {Ionicons,SimpleLineIcons,MaterialCommunityIcons,Fontisto} from "@expo/vector-icons";
import { useNavigation , useRoute} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AddToCart from "../../hook/AddToCart";
import { COLORS } from "../../constant";
import styles from "./productdetail.style";
import { SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";



function ProductDetails () {

    const navigation = useNavigation();
    const route = useRoute();
    const {item} = route.params;
    

    const [counter,setCounter] = useState(1);
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const [favorites , setFavorites]   = useState(false);
    const [paymentUrl , setPaymentUrl] = useState(false);

    const token = AsyncStorage.getItem("token");
    const increment = () => {
      setCounter(counter + 1);
    } 

    const Decrement = () => {

      if(counter > 1) {
        setCounter(counter - 1);
      }
    }

    const addToFavorite = async () => {
        const id = await AsyncStorage.getItem("id");
        const favoritesId = `favorites${JSON.parse(id)}`

        let productId = item._id;

        let productObj = {
           id: item._id,
           title: item.title,
           supplier: item.supplier,
           imageUrl: item.imageUrl,
           product_location: item.product_location
        }
 
        try {
           const existingItem = await AsyncStorage.getItem(favoritesId);
           let favoritesObj   = existingItem ? JSON.parse(existingItem) : {};
           
           if (favoritesObj[productId]) {

              delete favoritesObj[productId];
              setFavorites(false);
              console.log("deleted");
           }
           else {
              favoritesObj[productId] = productObj;
              console.log("added to favorites");
              setFavorites(true);
           }

           await AsyncStorage.setItem(favoritesId , JSON.stringify(favoritesObj));
        } 
        catch (error) {
         
        }
        
    }

    const checkFavorites = async () => {

      const id = await AsyncStorage.getItem("id");
      const favoritesId = `favorites${JSON.parse(id)}`

      try {
         const favoritesObj = await AsyncStorage.getItem(favoritesId);

         if (favoritesObj !== null) {

            const favorites = JSON.parse(favoritesObj);

            if (favorites[item._id]) {
               setFavorites(true);
               console.log(item._id);
            }
         }
      } catch (error) {
         
      }
    }

    const createCheckOut = async () => {

       const id = await AsyncStorage.getItem("id");

       const response = await fetch("https://paymentorders-production.up.railway.app/stripe/create-checkout-session" , {
         method: "POST",
         headers: {
            'Content-Type': 'application/json'
         },
         body: {
            userId: JSON.parse(id),
            cartItem: [
               {
                  id: item._id,
                  name: item.title,
                  price: item.price,
                  cartQuantity: counter
               }
            ]
         }       
       });
       const {url} = await response.json();
       setPaymentUrl(url);
    }

    const onNavigationStateChange = (webViewState) => {
       
        const {url} = webViewState;

        if (url && url.includes('checkout-success')) {

             navigation.navigate("OrdersScreen");
             
        }else

        if (url && url.includes('cancel')) {

          navigation.goBack();
        }
    }

    const handleBuy = () => {
        return createCheckOut();
    }

    const handleCart = () => {

    }

    const checkUser = async () => {

      try {
         const id = await AsyncStorage.getItem("id");

         if (id) {
             setIsLoggedIn(true);
             console.log("user logged in");
         }
         
      } catch (error) {
         
      }
    }

    useEffect(() => {
      checkUser();
      checkFavorites();
    } , []);

    return (
        <View style={styles.container}>

         {paymentUrl ? (<SafeAreaView style={styles.safeAreaStyle}>
            <WebView source={{uri: paymentUrl}} onNavigationStateChange={onNavigationStateChange}/>
         </SafeAreaView>) : (

            <View style={styles.container}>
                <View style={styles.upperRow}>
              <TouchableOpacity onPress={() => {navigation.goBack()}}>
                <Ionicons name="chevron-back-circle" size={30}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={isLoggedIn ? () => {addToFavorite()} : () => {navigation.navigate("LoginScreen")}}>
                <Ionicons name={favorites ? "heart" : "heart-outline"} size={30} color={COLORS.primary}/>
              </TouchableOpacity>
           </View>

           <Image source={{uri: item.imageUrl}}
                  style={styles.img}/>

           <View style={styles.details}>
              <View style={styles.titleRow}>
                 <Text style={styles.title}>{item.title}</Text>
               <View style={styles.priceWrapper}>
                 <Text style={styles.price}>{item.price}</Text>
               </View>
              </View>
              
              <View style={styles.ratingRow}>

                 <View style={styles.rating}>
                    {[1,2,3,4,5].map((index) => (
                        <Ionicons key={index} name="star" size={24} color="gold"/>
                    ))}
                    <Text style={styles.ratingTxt}>(4.9)</Text>
                 </View>
                 <View style={styles.rating}>
                    <TouchableOpacity onPress={() => {increment()}}>
                       <SimpleLineIcons name="plus" size={20}/>
                    </TouchableOpacity>

                    <Text> {counter} </Text> 

                    <TouchableOpacity onPress={() => {Decrement()}}>
                       <SimpleLineIcons name="minus" size={20}/>
                    </TouchableOpacity>
                 </View> 

              </View>

              <View style={styles.descriptionWrapper}>
                 <Text style={styles.description}>Description</Text>
                 <Text style={styles.descText}>{item.description}</Text>
              </View>

              <View style={{marginBottom: 12}}>
                 <View style={styles.location}>
                    <View style={{flexDirection: 'row'}}>
                     <Ionicons name="location-outline" size={20}/>
                     <Text>{item.product_location}</Text>
                    </View> 

                    <View style={{flexDirection: 'row'}}>
                     <MaterialCommunityIcons name="truck-delivery-outline" size={20}/>
                     <Text>  Free Delivery </Text>
                    </View>
                 </View>
              </View>

              <View style={styles.cartRow}>
                 <TouchableOpacity onPress={isLoggedIn ? () => {createCheckOut()} : () => {navigation.navigate("LoginScreen")}} style={styles.cartBtn}>
                     <Text style={styles.btnText}>Buy now</Text>
                 </TouchableOpacity>

                 <TouchableOpacity onPress={isLoggedIn ? () => {AddToCart(item._id,counter)} : () => {navigation.navigate("LoginScreen")}} style={styles.addCart}>
                     <Fontisto name="shopping-bag" size={20} color={COLORS.lightWhite}/>
                 </TouchableOpacity>
              </View>
           </View>
            </View>
         )}

                  
        </View>
    );
}


export default ProductDetails;