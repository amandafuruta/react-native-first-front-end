import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Preload from '../screens/Preload'

import Home from '../screens/Home' 
import Metas from '../screens/Metas'
import Clientes from '../screens/Clientes'
import DetalhesClientes from '../screens/DetalhesClientes'
import MinhaVenda from '../screens/MinhaVenda'

import NovaVenda from '../screens/NovaVenda'
import NovosClientes from '../screens/NovosClientes';
import NovaVendaProdutos from '../screens/NovaVendaProdutos'
import NovaVendaRevisao from '../screens/NovaVendaRevisao';
import FormaPagamento from '../screens/FormaPagamento'
import PagamentoFinalizado from '../screens/PagamentoFinalizado';

import Desempenho from '../screens/Desempenho'

import Estoque from '../screens/Estoque'
import NovoProduto from '../screens/NovoProduto'

const Stack = createStackNavigator()


const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="Metas" component={Metas} />
            <Stack.Screen name="Clientes" component={Clientes} options={{
                title: 'Clientes',
                headerStyle: {
                    backgroundColor: '#fff',
                    height: 80,
                    elevation: 0,
                },
                headerTintColor: '#075598',
                headerTitleStyle: {
                    fontSize:18,
                    fontWeight: '700',
                },
                }} />
            <Stack.Screen name="Detalhes" component={DetalhesClientes} options={{
                title: 'Detalhes',
                headerStyle: {
                    backgroundColor: '#F1F1F1',
                    height: 80,
                    elevation: 0,
                },
                headerTintColor: '#075598',
                headerTitleStyle: {
                    fontSize:18,
                    fontWeight: '700',
                },
                }} />
            <Stack.Screen name="Minha Venda" component={MinhaVenda}
                options={{
                    title: 'Minha Venda',
                    headerStyle: {
                        backgroundColor: '#F1F1F1',
                        height: 80,
                        elevation: 0,
                    },
                    headerTintColor: '#075598',
                    headerTitleStyle: {
                        fontSize:18,
                        fontWeight: '700',
                        paddingLeft:60,
                    },
                    }}
            />
          
        </Stack.Navigator>
    )
}

const NewSaleStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Nova Venda" component={NovaVenda} options={{headerShown:false}}/>

            <Stack.Screen name="Novos Clientes" component={NovosClientes} options={{
                title: 'Novos Clientes',
                headerStyle: {
                    backgroundColor: '#F1F1F1',
                    height: 80,
                    elevation: 0,
                },
                headerTintColor: '#075598',
                headerTitleStyle: {
                    fontSize:18,
                    fontWeight: '700',
                },
                }} />

            <Stack.Screen name="Nova Venda Produtos" component={NovaVendaProdutos} 
            options={{
                title: 'Produtos',
                headerStyle: {
                    backgroundColor: '#F1F1F1',
                    height: 80,
                    elevation: 0,
                },
                headerTintColor: '#075598',
                headerTitleStyle: {
                    fontSize:18,
                    fontWeight: '700',
                    paddingLeft:75,
                },
                }} />

            <Stack.Screen name="Revisão" component={NovaVendaRevisao} 
                options={{
                    title: 'Revisão',
                    headerStyle: {
                        backgroundColor: '#F1F1F1',
                        height: 80,
                        elevation: 0,
                    },
                    headerTintColor: '#075598',
                    headerTitleStyle: {
                        fontSize:18,
                        fontWeight: '700',
                        paddingLeft:75,
                    },
                    }}
            />

            <Stack.Screen name="Forma de Pagamento" component={FormaPagamento} 
                options={{
                    title: 'Forma de Pagamento',
                    headerStyle: {
                        backgroundColor: '#F1F1F1',
                        height: 80,
                        elevation: 0,
                    },
                    headerTintColor: '#075598',
                    headerTitleStyle: {
                        fontSize:18,
                        fontWeight: '700',
                        paddingLeft:25,
                    },
                    }}
            />
            <Stack.Screen name="Pagamento Finalizado" component={PagamentoFinalizado} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}

const PerformanceNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Desempenho" component={Desempenho} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

const StockNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Estoque" component={Estoque}  options={{headerShown:false}}/>
            <Stack.Screen name="Novo Produto" component={NovoProduto}
                options={{
                    title: 'Novo Produto',
                    headerStyle: {
                        backgroundColor: '#F1F1F1',
                        height: 80,
                        elevation: 0,
                    },
                    headerTintColor: '#075598',
                    headerTitleStyle: {
                        fontSize:18,
                        fontWeight: '700',
                        paddingLeft:55,
                    },
                    }}
            />
        </Stack.Navigator>
    )
}

export {MainStackNavigator, NewSaleStackNavigator, PerformanceNavigator, StockNavigator}
