import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Product } from '../../models'

import styles from './styles'

type mainProductProps = {
    mainProducts:Product
}

function index ({mainProducts}:mainProductProps){
    return(
        <View style={styles.productsContainer} >
                <View style={styles.titleProducts} >
                    <Text style={styles.topTitle}> Каталог </Text>
                <View style={{flexDirection:'row', alignItems: 'center',}} >
                    <Text style={styles.detailTitle} >Продробнее </Text>
                    <AntDesign name="right" size={19} color="#F24E61"/>
                </View>
            </View>
            <View>
                {mainProducts.map(item => {
                    return(<Text key={item.id} > {item.brand} </Text>)
                })}
            </View>
        </View>
    )
}

export default index