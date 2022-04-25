import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import FavoritesProducts from '../../components/FavoriteProducts'

function index() {

        return(
        <ScrollView>
            <FavoritesProducts/>
        </ScrollView>
    )
}

export default index