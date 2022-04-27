import React from 'react'
import { ScrollView } from 'react-native'
import FavoritesProducts from '../../components/FavoriteProducts'
import MainProducts from '../../components/MainProducts'
import CategoryFilter from '../../components/CategoryFilter'
import MesseageNotification from '../../components/MesseageNotification'

function Index() {

        return(
        <ScrollView>
            <MesseageNotification/>
            <CategoryFilter/>
            <FavoritesProducts/>
            <MainProducts />
        </ScrollView>
    )
}

export default Index