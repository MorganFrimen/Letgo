import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import {
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
} from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

function RootNavigator() {
  const CustomTabBarNavigation = ({ children }) => {
    return (
      <TouchableOpacity
        style={{
          width: 74,
          height: 74,
          backgroundColor: '#F24E61',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 40,
          borderWidth: 5,
          borderColor: '#fff',
        }}>
        <FontAwesome name="camera" size={26} color="#fff" />
        <Text style={{color: '#fff', fontSize: 12, fontWeight: '600'}} >Камера</Text>
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#F24E61',
        tabBarInactiveTintColor: '#959595',
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Домой"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Foundation name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Уведомления"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Ionicons name="notifications" size={24} color={color} />
              <View
                style={{
                  position: 'absolute',
                  top: -4,
                  right: -10,
                  width: 18,
                  height: 18,
                  borderRadius: 8,
                  backgroundColor: '#f24e61',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{ fontSize: 13, color: '#fff' }}>2</Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name=" "
        component={HomeNavigator}
        options={{
          tabBarIcon: (props) => <CustomTabBarNavigation {...props} />,
        }}
      />
      <Tab.Screen
        name="Чат"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={24} name="message-processing" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Фото"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="appstore1" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;
