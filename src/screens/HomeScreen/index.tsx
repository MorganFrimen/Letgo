import React, {useEffect, useState} from 'react'
import { View, ScrollView, Text } from 'react-native'
import productassets from '../../../assets/products';
import { Product } from '../../models'

import FavoritesProducts from '../../components/FavoriteProducts'
import MainProducts from '../../components/MainProducts'

function index() {

    const [product, setProduct] = useState<Product[]>([])
    useEffect(()=> {
        setProduct(productassets)
    },[])

        return(
        <ScrollView>
            <FavoritesProducts/>
            <MainProducts mainProducts={product} />
        </ScrollView>
    )
}

export default index