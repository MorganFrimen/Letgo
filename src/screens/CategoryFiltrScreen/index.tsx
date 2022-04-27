import React from 'react'
import { ScrollView } from 'react-native'
import { Product } from '../../models'
import productAssets from '../../../assets/products';
import MesseageNotification from '../../components/MesseageNotification'
import MainProducts from '../../components/MainProducts'

function Index() {
  return (
    <ScrollView style={{backgroundColor: 'white', width: '100%'}} >
        <MesseageNotification/>
        <MainProducts />
    </ScrollView>
  )
}

export default Index