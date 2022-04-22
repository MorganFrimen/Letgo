import React from 'react'
import { View,Text, Image,TouchableOpacity } from 'react-native'
import { Product } from '../../models'

type productProps = {
    product: Product
}

function index({product}:productProps){
    return(
       <View>
          <Text>1234</Text>
       </View> 
    )
}

export default index