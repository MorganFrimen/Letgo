import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Product } from '../../models'


type MainProductProps = {
    mainProduct: Product
}

function index({mainProduct}:MainProductProps) {
    return(
        <TouchableOpacity>
            <View>
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