import React , {useState} from "react";
import {View , Text , ScrollView , TouchableOpacity ,Image, TextInput,KeyboardAvoidingView,
        Alert  , ActivityIndicator} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import BackBtn from "../backBtn/BackBtn";
import Button from "../button/Button";
import styles from "./login.style";
import { COLORS } from "../../constant/theme";




validationSchema = Yup.object().shape({
    email: Yup.string().email("Provide a vaild email address").required("Required"),
    password: Yup.string().min(8 , "Password at least 8 Character").required("Required")
});


function Login () {

    const navigation = useNavigation();

    const [loader , setLoader] = useState(false);
    const [responseData , setResponseData] = useState({});
    const [obsecureText , setObsecureText] = useState(false);

    const inValidForm = () => {

        Alert.alert("Invalid Form" , "Please Provide All Required field" , [
            {text: "Cancel" , onPress: () => {}},
            {text: "Continu" , onPress: () => {}},
            {defaultIndex: 1}
        ])
    };

    const loginFunc = async (values) => {

        setLoader(true);
        try {
            const endpoint = "http://10.0.2.2:3000/api/auth/login";
            const data = values;

            const response = await axios.post(endpoint,data);

            if (response.status === 200) {
                setLoader(false);
                setResponseData(response.data);
                console.log(responseData);
                await AsyncStorage.setItem(`user${responseData._id}` , JSON.stringify(responseData));
                await AsyncStorage.setItem("id" , JSON.stringify(responseData._id));
                await AsyncStorage.setItem("token" ,JSON.stringify(responseData.token));
                navigation.replace("Bottom Navigation");

                /*for testing
                const newUser = await AsyncStorage.getItem(`user${responseData._id}`);
                console.log(newUser);*/
            }
            
        } 
        catch (error) {
            Alert.alert("Error" , "Oops, Try again" , [
                {text: "Cancel" , onPress: () => {}},
                {text: "Continu" , onPress: () => {}},
                {defaultIndex: 1}
            ])
        }
        finally {
            setLoader(false);
        }

    };

    return (
        
        <ScrollView>
           
            <SafeAreaView style={{marginHorizontal: 20}}>
                      
                  <BackBtn onPress={() => {navigation.goBack()}}/>
                  <Image source={require("../../../src/assets/images/bk.png")} style= {styles.loginCover}/>
                  <Text style={styles.title}>Unlimited Luxurious Furniture</Text>

                  <Formik initialValues={{email: "" , password: ""}} validationSchema={validationSchema}
                          onSubmit={(values) => loginFunc(values)}>

                        {({handleChange , handleBlur , touched , handleSubmit , values , errors , isValid , setFieldTouched}) => (
                            <View>
                               
                               <View style={styles.wrapper}>  
                                   <Text style={styles.label}>email</Text> 

                                   <View style= {styles.input(touched.email ? COLORS.primary : COLORS.offwhite)}>
                                      <MaterialCommunityIcons name="email-outline" size={20} color={COLORS.gray} style={styles.icon}/>
                                      <TextInput placeholder="Enter your Email" value= {values.email} onChangeText={handleChange("email")}
                                                 onFocus={() => {setFieldTouched("email")}} style={{flex: 1}}
                                                 onBlur={() => {setFieldTouched("email" , "")}} autoCapitalize="none" autoCorrect={false}/>
                                   </View>

                                   {touched.email && errors.email && (<Text style={styles.errorMessage}>{errors.email}</Text>)}
                               </View>

                               <View style={styles.wrapper}>  
                                   <Text style={styles.label}>Password</Text> 

                                   <View style= {styles.input(touched.password ? COLORS.primary : COLORS.offwhite)}>
                                      <MaterialCommunityIcons name="lock-outline" size={20} color={COLORS.gray} style={styles.icon}/>
                                      <TextInput placeholder="Enter your Password" value= {values.password} onChangeText={handleChange("password")}
                                                 onFocus={() => {setFieldTouched("password")}} style={{flex: 1}} 
                                                 onBlur={() => {setFieldTouched("password" , "")}} autoCapitalize="none" autoCorrect={false}
                                                 secureTextEntry={obsecureText === false}/>

                                      <TouchableOpacity onPress={() => {setObsecureText(!obsecureText)}}>
                                         <MaterialCommunityIcons name= {obsecureText ? "eye-outline" : "eye-off-outline"} size={20}/>
                                      </TouchableOpacity>           
                                   </View>
                                   
                                   {touched.password && errors.password && (<Text style={styles.errorMessage}>{errors.password}</Text>)}
                               </View>

                               <Button title= {loader ? <ActivityIndicator size={20} color={COLORS.white}/> : "Login"} onPress={isValid ? handleSubmit: () => {inValidForm()} } isValid={isValid} />

                               <Text style={styles.register} onPress={() => {navigation.navigate("SignUpScreen")}}>Register</Text>
                            </View>
                        )}    
                    
                  </Formik>
                  
            </SafeAreaView>
            
        </ScrollView>
        
    );
}


export default Login;