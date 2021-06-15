import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'; 

import Home from '../screens/Home'
import MinhaVenda from '../screens/MinhaVenda'
import Clientes from '../screens/Clientes'
import Desempenho from '../screens/Desempenho'
import MinhaConta from '../screens/MinhaConta'
import Estoque from '../screens/Estoque'
import Suporte from '../screens/Suporte'


// function MyHome({navigation}){
//   return(
//     <>
//       <Home/>
//       <TouchableOpacity onPress={()=>navigation.openDrawer()}>
//         <Entypo name="menu" size={24} color="black" />
//       </TouchableOpacity>
//     </>
//   )
// }

function MySale({navigation}){
  return(
    <>
    <MinhaVenda/>
    <TouchableOpacity onPress={()=>navigation.openDrawer()}>
        <Entypo name="menu" size={24} color="black" />
      </TouchableOpacity>
    </>
  )
}

function Clients(){
  return(
    <Clientes/>
  )
}

function Performance(){
  return(
    <Desempenho/>
  )
}

function MyAccount(){
  return(
    <MinhaConta/>
  )
}

function Stock(){
  return(
    <Estoque/>
  )
}

function Support(){
  return(
    <Suporte/>
  )
}


const Drawer = createDrawerNavigator()

function DrawerMenu(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name='Minhas Vendas' component={MySale}/>
      <Drawer.Screen name='Clientes' component={Clients}/>
      <Drawer.Screen name='Desempenho' component={Performance}/>
      <Drawer.Screen name='Minha Conta' component={MyAccount}/>
      <Drawer.Screen name='Estoque' component={Stock}/>
      <Drawer.Screen name='Suporte' component={Support}/>
    </Drawer.Navigator>
  )
}

export default function Menu() {

  return (
    <>
      <NavigationContainer>
        <DrawerMenu/>
      </NavigationContainer>   
    </>
  );
}

