import React , {useState , useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";



const getOrders = async () => {

    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState(null);

    const getData = async () => {
         
        setLoading(true);
        const token = await AsyncStorage.getItem("token");

        try {
            const endpoint = "http://10.0.2.2:3000/api/orders/";
            
            const response = await axios.get(endpoint, {headers: {'Content-Type' : 'application/json' , 'token': `Bearer ${JSON.parse(token)}`}});
        } 
        catch (error) {
          setError(error);  
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    } , []);

    return {data,loading,error}
}

export default getOrders;