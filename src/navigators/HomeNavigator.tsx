import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity,Image, TextInput,Text } from 'react-native'

const Stack = createStackNavigator()

const MainHeaderComponent = () => {
    return(
    <SafeAreaView style={{flexDirection:'row', justifyContent:'space-between' , alignItems:'center', width:'92%', marginHorizontal:'4%', marginTop: 18}} >
        <TouchableOpacity>
            <Image style={{width:40, height:40, borderRadius:20}} source={{uri: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'}} />
        </TouchableOpacity>
        <TextInput placeholder='Поиск' style={{backgroundColor:'#e5e5e5',flex:1,marginHorizontal: 12, height:46, borderRadius: 50, paddingLeft: '32%'}} />
        <Text style={{color:'#ff184d', fontSize: 16}} > Фильтр </Text>
    </SafeAreaView>
    )
}

function HomeNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{
                header:()=>(
                    <MainHeaderComponent/>
                )
            }}
        />
    </Stack.Navigator>
  )
}

export default HomeNavigator