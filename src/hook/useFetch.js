import React , {useState,useEffect} from "react"; 
import axios from "axios";



function useFetch() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        
        setIsLoading(true);
        try {
           const response =  await axios.get("http://10.0.2.2:3000/api/products"); 
           setData(response.data);  
           setIsLoading(false);
        } 
        catch (error) {
            setError(error);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
       fetchData();
    },[]);

    //to fetch data manually
      const refetch = () => {
          setIsLoading(true);
          fetchData();
      }

    return (
        {data,isLoading,error}
    );
}

export default useFetch;