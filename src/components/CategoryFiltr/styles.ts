import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    scrollStyle: {
        marginTop: 24,
        height:height*0.09,
    },
    center: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        minWidth: 75,
    },
    image:{
        width:52,
        height: 52,
        borderRadius: 30,
    }
})

export default styles