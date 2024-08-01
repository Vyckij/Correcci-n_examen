import React from "react";
import {View, Text} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Menu from "./componentes/home/Menu";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ListComponent from "./componentes/list/List";
import User from './screen/User'
import Chat from "./screen/Chat";
import Pdf from "./screen/Pdf";
import Chat2 from "./screen/Chat2";


const Tab = createBottomTabNavigator()

const Navigation = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Menu} options={{
                tabBarLabel: 'PÁGINA PRINCIPAL',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="home" color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name={'list'} component={ListComponent} options={{
                tabBarLabel: 'LISTADO',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name={'clipboard-list'} color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name={'nombre'} component={User} options={{
                tabBarLabel: 'NOMBRE',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name={'account'} color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name={'openIA'} component={Chat} options={{
                tabBarLabel: 'OpenIA',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name={'brain'} color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name={'pdf'} component={Pdf} options={{
                tabBarLabel: 'PDF',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name={'file-pdf-box'} color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name={'chat2'} component={Chat2} options={{
                tabBarLabel: 'Chat2',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name={'android'} color={color} size={size}/>
                )
            }}/>
        </Tab.Navigator>
    )
}

export default Navigation