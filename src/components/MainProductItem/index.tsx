import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Product } from '../../models'
import styles from './styles'


type MainProductProps = {
    mainProduct: Product
}

function index({mainProduct}:MainProductProps) {
    return(
        <TouchableOpacity>
            <View style={styles.itemImage} >
                <Image 
                    source={{uri:mainProduct.image}}
                    resizeMode="stretch"
                    style={styles.favoriteImage}
                />
            </View>
        </TouchableOpacity>
       
    )
}

export default index