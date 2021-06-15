import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'
import { AntDesign,  MaterialCommunityIcons , Feather  } from '@expo/vector-icons'; 

import Home from './MainTab'
import MinhaVenda from '../screens/MinhaVenda'
import MinhaConta from '../screens/MinhaConta'
import Suporte from '../screens/Suporte'


const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return(
    <Drawer.Navigator 
      drawerStyle={{
        backgroundColor: '#fff',
        paddingTop:20,
        width: 240,
      }}
      drawerContentOptions={{
        activeTintColor: '#075598'
      }}
     >
        <Drawer.Screen 
          name='Home' 
          component={Home} 
          options={{drawerIcon: () => {
            return <AntDesign  name="home" size={24} color='#075598' />;
          }}} 
        />
          
        <Drawer.Screen 
          name='Minhas Vendas' 
          component={MinhaVenda}
          options={{drawerIcon: () => {
            return <AntDesign  name="areachart" size={24} color='#075598' />;
          }}}
        />

        <Drawer.Screen 
          name='Minha Conta' 
          component={MinhaConta}
          options={{drawerIcon: () => {
            return <MaterialCommunityIcons  name="account" size={24} color='#075598' />;
          }}}
        />

        <Drawer.Screen 
          name='Suporte' 
          component={Suporte}
          options={{drawerIcon: () => {
            return <Feather   name="help-circle" size={24} color='#075598' />;
          }}}
        />
    </Drawer.Navigator>
  )
}



export default DrawerNavigator

