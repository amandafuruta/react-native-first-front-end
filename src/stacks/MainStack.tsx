import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Preload from '../screens/Preload'
import Home from '../screens/Home' 
import Metas from '../screens/Metas'

import NovaVenda from '../screens/NovaVenda'
import MinhaConta from '../screens/MinhaConta'
import Suporte from '../screens/Suporte'
import NovosClientes from '../screens/NovosClientes';

const Stack = createStackNavigator()


const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="Metas" component={Metas} />
        </Stack.Navigator>
    )
}

const NewSaleStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Nova Venda" component={NovaVenda} options={{headerShown:false}}/>
            <Stack.Screen name="Novos Clientes" component={NovosClientes} />
        </Stack.Navigator>
    )
}

const MyAccountNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Minha Conta" component={MinhaConta}/>
        </Stack.Navigator>
    )
}

const SupportNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Suporte" component={Suporte}/>
        </Stack.Navigator>
    )
}

export {MainStackNavigator, NewSaleStackNavigator, MyAccountNavigator, SupportNavigator}
