import React , {useEffect, useState} from 'react'
import { View, ScrollView, Text } from 'react-native'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons'; 
import productasssets from '../../../assets/products';
import { Product } from '../../models/index'

function index() {

    const [product, setProduct] = useState<Product[]>([])
    useEffect(()=> {
        setProduct(productasssets)
    },[]) 

        return(
        <View style={styles.productsContainer} >
            {/*Render Header*/}
            <View style={styles.titleProducts} >
                <Text style={styles.topicTitle}>
                    Лучшее
                </Text>
                <View style={{flexDirection:'row', alignItems: 'center',}}>
                    <Text style={styles.ditailTitle}>Подробнее</Text>
                    <AntDesign name="right" size={19} color="#F24E61"/>
                </View>
            </View>
            {/* Render Favorites Products */}
            <ScrollView
                bounces={true}
                horizontal={true}
            >
                {product.map(item => {
                    return(<Text>{item.brand}</Text>)
                }) }
            </ScrollView>
        </View>
    )
}

export default index