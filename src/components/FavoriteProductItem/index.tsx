import React from 'react'
import { View,Text, Image,TouchableOpacity } from 'react-native'
import { Product } from '../../models'
import styles from './style'
import { AntDesign } from '@expo/vector-icons'; 

type productProps = {
    product: Product
}

function index({product}:productProps){
    return(
      <TouchableOpacity style={styles.favorite}>
          <View style={styles.favoriteView}>
              <Image 
                source={{uri:product.image}}
                resizeMode="stretch"
                style={styles.favoriteImage}
              />
              <View style={styles.labelFav} >
                <Text style={{fontSize: 12, fontWeight: '500',}} > Топ цена </Text>
              </View>
              <TouchableOpacity> 
                <AntDesign style={{position:"absolute", right:4, bottom: 5 }} name="heart" size={26} color="red" />
              </TouchableOpacity>
          </View>
      </TouchableOpacity>
    )
}

export default index