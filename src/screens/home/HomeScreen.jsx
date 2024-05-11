import React from "react";
import { ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Welcome , HeadBar , CarouselSliders , Heading} from "../../components";
import ProductsList from "../../components/products/ProductsList";
import styles from "./homescreen.style";


function HomeScreen () {

    return (
        <SafeAreaView>
            <HeadBar/>

            <ScrollView>
              <Welcome/>
              <CarouselSliders/>
              <Heading/>
              <ProductsList/>
            </ScrollView>

        </SafeAreaView>
    );
}

export default HomeScreen;