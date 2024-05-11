import React , {useState} from "react";
import {View , Text , ScrollView , TouchableOpacity ,Image, TextInput,KeyboardAvoidingView,
        Alert , Platform, ActivityIndicator} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {MaterialCommunityIcons , Ionicons} from "@expo/vector-icons";
import {Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import BackBtn from "../backBtn/BackBtn";
import Button from "../button/Button";
import styles from "./signup.style";
import { COLORS ,SIZES} from "../../constant/theme";



validationSchema = Yup.object().shape({
    username: Yup.string().min(3 , "Provide a valid username"),
    email: Yup.string().email("Provide a vaild email address").required("Required"),
    location: Yup.string().min(3 , "Provide a valid location"),
    password: Yup.string().min(8 , "Password at least 8 Character").required("Required")
});



function SignUp () {

    const navigation = useNavigation();

    const [loader , setLoader] = useState(false);
    const [obsecureText , setObsecureText] = useState(false);

    const inValidForm = () => {

        Alert.alert("Invalid Form" , "Please Provide All Required field" , [
            {text: "Cancel" , onPress: () => {}},
            {text: "Continu" , onPress: () => {}},
            {defaultIndex: 1}
        ])
    }

    const registerUser = async (values) => {

        setLoader(true);
        try {
             const endpoint = "http://10.0.2.2:3000/api/auth/register";
             const data = values;

             const response = await axios.post(endpoint,data);

             if (response.status === 201) {
                setLoader(false);
                navigation.navigate("LoginScreen");
             }
        }
         catch (error) {
            Alert.alert("Error" , "Oops, Try again" , [
                {text: "Cancel" , onPress: () => {}},
                {text: "Continu" , onPress: () => {}},
                {defaultIndex: 1}
            ])  
        }
    };

    return (
        <ScrollView>
           
            <SafeAreaView style={{marginHorizontal: 20}}>
                      
                  <BackBtn onPress={() => {navigation.goBack()}}/>
                  <Image source={require("../../../src/assets/images//bk.png")} style= {{width: SIZES.width - 60,height: SIZES.height / 3,
                                                                                    resizeMode: "contain",
                                                                                     marginBottom: 20}}/>
                  <Text style={styles.title}>Unlimited Luxurious Furniture</Text>

                  <Formik initialValues={{ username: "" , email: "" , password: "" , location: ""}} validationSchema={validationSchema}
                          onSubmit={(values) => registerUser(values)}>

                        {({handleChange , handleBlur , touched , handleSubmit , values , errors , isValid , setFieldTouched}) => (
                            <View>

                               <View style={styles.wrapper}>  
                                   <Text style={styles.label}>Username</Text> 

                                   <View style= {styles.input(touched.username ? COLORS.primary : COLORS.offwhite)}>
                                      <MaterialCommunityIcons name="face-man-profile" size={20} color={COLORS.gray} style={styles.icon}/>
                                      <TextInput placeholder="Enter your username" value= {values.username} onChangeText={handleChange("username")}
                                                 onFocus={() => {setFieldTouched("username")}} style={{flex: 1}}
                                                 onBlur={() => {setFieldTouched("username" , "")}} autoCapitalize="none" autoCorrect={false}/>
                                   </View>

                                   {touched.email && errors.email && (<Text style={styles.errorMessage}>{errors.email}</Text>)}
                               </View>
                               
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
                                   <Text style={styles.label}>location</Text> 

                                   <View style= {styles.input(touched.location ? COLORS.primary : COLORS.offwhite)}>
                                      <Ionicons name="location-outline" size={20} color={COLORS.gray} style={styles.icon}/>
                                      <TextInput placeholder="Enter your location" value= {values.location} onChangeText={handleChange("location")}
                                                 onFocus={() => {setFieldTouched("location")}} style={{flex: 1}}
                                                 onBlur={() => {setFieldTouched("location" , "")}} autoCapitalize="none" autoCorrect={false}/>
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

                               <Button title= {loader ? <ActivityIndicator size={20} color={COLORS.white}/> : "SignUp"}  onPress={isValid ? handleSubmit: () => {inValidForm()} } isValid={isValid} />

                               
                            </View>
                        )}    
                    
                  </Formik>
                  
            </SafeAreaView>
            
        </ScrollView>
    );
}


export default SignUp;