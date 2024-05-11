import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";




const AddToCart = async (productId , quantity ) => {

    try {
        
        const token = await AsyncStorage.getItem('token');      
        console.log(token);

        const endpoint = "http://10.0.2.2:3000/api/carts/"

      await axios.post("http://10.0.2.2:3000/api/carts/" , {cartItem:productId,quantity: quantity} , {      
           
        headers: {
              'Content-Type': 'application/json','token': `Bearer ${JSON.parse(token)}`
            }

    });
            
    }
    catch (error) {
        
        console.log(error.message);
    }
}; 


export default AddToCart;