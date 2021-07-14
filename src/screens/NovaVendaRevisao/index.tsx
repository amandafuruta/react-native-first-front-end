import React, {useState, useEffect} from 'react';
import { Container, MainBox } from './style';
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {GlobalStyles} from '../../../style/globalStyle'

const produtos = [
    {
      id: 0,
      foto: require('../../../assets/produto1.jpg'),
      descricao: 'Apresuntado Sadia',
      preco: 23.90,
      unidade: '10',
    
    },
    {
      id: 1,
      foto: require('../../../assets/produto2.jpg'),
      descricao: 'Queijo Mussarela',
      preco: 23.90,
      unidade: '3',
    
    },
    {
      id: 2,
      foto: require('../../../assets/produto3.jpg'),
      descricao: 'Mortadela Seara',
      preco: 23.90,
      unidade: '5',
    
    },
    {
      id: 3,
      foto: require('../../../assets/produto1.jpg'),
      descricao: 'Apresuntado Sadia',
      preco: 23.90,
      unidade: '0',
    
    },
    {
      id: 4,
      foto: require('../../../assets/produto1.jpg'),
      descricao: 'Apresuntado Sadia',
      preco: 23.90,
      unidade: '10',
    
    },
    {
      id: 5,
      foto: require('../../../assets/produto2.jpg'),
      descricao: 'Queijo Mussarela',
      preco: 23.90,
      unidade: '3',
    
    },
    {
      id: 6,
      foto: require('../../../assets/produto3.jpg'),
      descricao: 'Mortadela Seara',
      preco: 23.90,
      unidade: '5',
    
    },
    {
      id: 7,
      foto: require('../../../assets/produto1.jpg'),
      descricao: 'Apresuntado Sadia',
      preco: 23.90,
      unidade: '0',
    
    },
  ];

  interface FullCart {
      nomeProduto:string, 
      quantidade: number,
      valorTotal: number,
  }

  

export default ({navigation,route}) => {
    const cliente = route.params
    const [productInCart, setProductInCart] = useState<FullCart[]>([])
    

    useEffect(()=>{
        
        AsyncStorage.getItem('carrinho').then((response)=>{
            const cart = JSON.parse(response)

            if (cart.length>0){
                cart.map((item)=> {
                    const product = produtos.find((elemento)=>{
                        return elemento.id === item.produtoID
                    })

                    if(product){
                        var total = item.quantidade * product.preco
                        setProductInCart((oldCart)=> [...oldCart, {nomeProduto:product.descricao, quantidade:item.quantidade, valorTotal:total}])
                    }               
                })
            }
        })      
    },[])

        const somaTotal = () =>{
            var totalSoma = 0
            productInCart.map((item) => {
                totalSoma += item.valorTotal
            })
            
            ArmazenarLocalstorage('valor', totalSoma.toFixed(2))
            return totalSoma.toFixed(2)
        }

        const ArmazenarLocalstorage= (chave, valor) => {
            AsyncStorage.setItem(chave,valor)
        }
       

        const salvar = (compra) =>{
            AsyncStorage.setItem('total',compra)
        }
    
    
    return(
        <Container>
            <MainBox style={GlobalStyles.backgroundWhite} >    
                <Text style={[GlobalStyles.darkGreyColor,{fontSize:18, marginBottom:5}]}>{cliente}</Text>
                <Text style={[GlobalStyles.primaryColor,{fontSize:20, marginBottom:30}]}>Revisão de pedido</Text>
                <FlatList
            
                    data={productInCart}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (

                        <View style={{flexDirection:'row', paddingVertical:20, borderBottomColor:'#DADADA', borderBottomWidth:1}} >      
                            <View style={{width: 150}}>
                                <Text style={[GlobalStyles.mediumGreyColor, {fontSize:15}]}>
                                    {item.nomeProduto}
                                </Text>
                            </View>

                            <View style={{width: 30, marginRight:10}}>
                                <Text style={[GlobalStyles.mediumGreyColor,{fontSize:15}]}>
                                    {item.quantidade}
                                </Text>
                            </View>

                            <View style={{width: 70}}>
                                <Text >
                                    R$ {item.valorTotal.toFixed(2)}
                                </Text>
                            </View>
                        </View>
                    )}
                />

                <View style={{flexDirection: 'row', marginVertical: 25}}>
                    <Text style={{fontSize:15, color:'#2D2D2D', marginRight:12}}>Total:</Text>
                    <Text style={[GlobalStyles.primaryColor,{fontSize:15}]}>R$ {somaTotal()} </Text>
                </View>

                <TouchableOpacity style={[styles.btn, GlobalStyles.backgroundPrimary, GlobalStyles.button]} onPress={()=>{salvar(somaTotal()), navigation.navigate('Forma de Pagamento')}}>
                    <Text style={[styles.txt, GlobalStyles.whiteColor]}>Avançar</Text>
                </TouchableOpacity>
            </MainBox>
        </Container>
    )
}

const styles = StyleSheet.create({
   
    btn:{
        width: 250,
    },

    txt:{
        fontSize: 12,
        fontWeight: '700',
        textTransform:'uppercase'
    },
})
