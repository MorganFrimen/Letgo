import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    favoriteImage: {
        width:width*0.40,
        height:width*0.40,
        borderRadius: 8,
        marginTop: 8,
        marginHorizontal: 4,
    },
    
   
})

export default styles