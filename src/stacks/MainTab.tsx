import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native'

import {MainStackNavigator, NewSaleStackNavigator, PerformanceNavigator, StockNavigator} from './MainStack'
import NovaVenda from '../screens/NovaVenda'
import Desempenho from '../screens/Desempenho'
import Estoque from '../screens/Estoque'

import { AntDesign , MaterialIcons  } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator 
        tabBarOptions={{
            showLabel:false,
            style:{
                height: 82,
                backgroundColor: "#fff",
            }
        }}>

            <Tab.Screen name="Home" component={MainStackNavigator} options={{
                tabBarIcon: ({focused}) => {
                    return <View style={{ alignItems:'center', justifyContent: 'center', height:'90%', width: '70%', borderRadius:10}}>
                        {/* <Image
                            source={require('../../assets/home.jpg')}
                            style={estilo.img}
                        /> */}
                        <Text style={estilo.img}>
                            <AntDesign  name="home"  style={{color: focused? '#075598' : '#8dbfe8', fontSize: focused? 26 : 24}}/>
                        </Text>
                        <Text style={{color: focused? '#075598' : '#8dbfe8', fontSize: focused? 14:12}}>Home</Text>
                    </View>;
                }
            }}/>

            <Tab.Screen name="Nova venda" component={NewSaleStackNavigator} options={{
                tabBarIcon: ({focused}) => {
                    return <View style={{alignItems:'center', justifyContent: 'center', height:'90%', width: '90%', borderRadius:10}}>
                        <Text style={estilo.img}>
                            <MaterialIcons  name="attach-money" style={{color: focused? '#075598' : '#8dbfe8', fontSize: focused? 26 : 24}}/>
                        </Text>
                        <Text style={{color: focused? '#075598' : '#8dbfe8', fontSize: focused? 14:12}}>Nova Venda</Text>
                    </View>;
                },
            }}/>


            <Tab.Screen name="Desempenho" component={PerformanceNavigator} options={{
                   tabBarIcon: ({focused}) => {
                    return <View style={{alignItems:'center', justifyContent: 'center', height:'90%', width: '90%', borderRadius:10}}>
                        <Text style={estilo.img}>
                            <AntDesign  name="linechart"style={{color: focused? '#075598' : '#8dbfe8', fontSize: focused? 26 : 24}}/>
                        </Text>
                        <Text style={{color: focused? '#075598' : '#8dbfe8', fontSize: focused? 13:12}}>Desempenho</Text>
                    </View>;
                },
            }}/>

            <Tab.Screen name="Estoque" component={StockNavigator} options={{
                tabBarIcon: ({focused}) => {
                    return <View style={{alignItems:'center', justifyContent: 'center', height:'90%', width: '90%', borderRadius:10}}>
                        <Text style={estilo.img}>
                            <AntDesign  name="barcode"  style={{color: focused? '#075598' : '#8dbfe8',  fontSize: focused? 26 : 24}}/>
                        </Text>
                        <Text style={{color: focused? '#075598' : '#8dbfe8', fontSize: focused? 14:12}}>Estoque</Text>
                    </View>;
                },
            }}/>


    </Tab.Navigator>
)

const estilo = StyleSheet.create({
    div:{
        alignItems:'center',
        justifyContent: 'center',
        
    },

    txt:{
        color: '#075598',
        fontSize: 12,
    },

    img:{
        width:25,
        height:25,
        marginBottom: 8,
        resizeMode:'contain',
    }
})