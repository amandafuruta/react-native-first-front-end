import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Preload from '../screens/Preload'
import Home from '../screens/Home' 
import Metas from '../screens/Metas'
import Clientes from '../screens/Clientes'
import DetalhesClientes from '../screens/DetalhesClientes'

import NovaVenda from '../screens/NovaVenda'
import NovosClientes from '../screens/NovosClientes';

import Desempenho from '../screens/Desempenho'

import Estoque from '../screens/Estoque'
import NovoProduto from '../screens/NovoProduto'

const Stack = createStackNavigator()


const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="Metas" component={Metas} />
            <Stack.Screen name="Clientes" component={Clientes} />
            <Stack.Screen name="Detalhes" component={DetalhesClientes} />
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

const PerformanceNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Desempenho" component={Desempenho}/>
        </Stack.Navigator>
    )
}

const StockNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Estoque" component={Estoque} options={{headerShown:false}}/>
            <Stack.Screen name="Novo Produto" component={NovoProduto}/>
        </Stack.Navigator>
    )
}

export {MainStackNavigator, NewSaleStackNavigator, PerformanceNavigator, StockNavigator}
