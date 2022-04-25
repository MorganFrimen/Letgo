import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Product } from '../../models'
import productAssets from '../../../assets/products';
import MainProductItem from '../MainProductItem/index'
import styles from './styles'

function index (){
    const [mainProduct, setMainProducts] = useState<Product[]>([])
    useEffect(()=>{
        setMainProducts(productAssets)
    },[])   

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
               {mainProduct.map(item => {
                   return<MainProductItem key={item.id} mainProduct={item}/>
                })}
            </View>
        </View>
    )
}

export default index