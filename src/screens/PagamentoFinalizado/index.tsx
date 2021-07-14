import React, { useEffect, useState } from 'react';
import { Container } from './style';
import {Text, View, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import {GlobalStyles} from '../../../style/globalStyle'

import AsyncStorage from '@react-native-async-storage/async-storage';


export default ({navigation}) => {
    const [cliente, setCliente] = useState('')
    const [formaPagamento, setFormaPagamento] = useState('')
    const [parcela, setParcela] = useState('')
    const [total, setTotal] = useState('')

    useEffect(() =>{
        AsyncStorage.getItem('cliente').then((response)=>{
            setCliente(response)
        })

        AsyncStorage.getItem('total').then((response)=>{
            setTotal(JSON.parse(response))
        })

        AsyncStorage.getItem('forma-Pagamento').then((response)=>{
            setFormaPagamento(response)
        })

        AsyncStorage.getItem('parcela').then((response)=>{
            setParcela(response)
        })
        
       },[])
    
    return(
        <Container style={GlobalStyles.backgroundWhite}>
            
                <Image
                    source={require('../../../assets/confete-top.jpg')}
                    style={estilo.imgTop}
                />

                <Text style={[GlobalStyles.primaryColor,{fontSize: 20, textAlign:'center', width:180, marginBottom:10}]}>Registro realizado com sucesso !</Text>

                <Image
                    source={require('../../../assets/confetes-bottom.jpg')}
                    style={estilo.imgBottom}
                />

                <Image
                    source={require('../../../assets/pagamento-finalizado.jpg')}
                    style={estilo.imgFinal}
                />

                <View style={estilo.divTexto}>
                    <Text style={[estilo.texto, GlobalStyles.darkGreyColor]}>Cliente: </Text>
                    <Text style={[[estilo.texto, GlobalStyles.darkGreyColor], {fontWeight: 'bold'}]}> {cliente}</Text>
                </View>

                <View style={estilo.divTexto}>
                    <Text style={[estilo.texto, GlobalStyles.darkGreyColor]}>Valor total: </Text>
                    <Text style={[estilo.texto, GlobalStyles.darkGreyColor, {fontWeight: 'bold'}]}>R$ {total}</Text>
                </View>

                <View style={estilo.divTexto}>
                    <Text style={[estilo.texto, GlobalStyles.darkGreyColor]}>Forma de pagamento: </Text>
                    <View style={estilo.divTexto}>
                        <Text style={[estilo.texto, GlobalStyles.darkGreyColor, {fontWeight: 'bold'}]}>{formaPagamento} </Text>
                        <Text style={[estilo.texto, GlobalStyles.darkGreyColor ,{fontWeight:'bold' ,display: formaPagamento=='Cartão'? 'flex': 'none'}]}>{parcela}x</Text>
                    </View>

                </View>
                
                <TouchableOpacity
                    style={estilo.btnNovaVenda}
                    onPress={()=>{navigation.navigate('Nova Venda')}}
                >
                    <Text style={[estilo.btnNovaVendaTxt, GlobalStyles.primaryColor]}>Nova Venda!</Text>
                </TouchableOpacity>            
            
        </Container>
    )
}

const estilo = StyleSheet.create({
    
    imgTop:{
        width:250,
        height:80
    }, 

    imgBottom:{
        height: 50,
        width: 250,
        
    },

    imgFinal:{
        width: 150,
        height: 120,
        marginBottom:20,
    },

    divTexto:{
        flexDirection:'row'
    },

    texto:{
        fontSize: 15, 
    },

    btnNovaVenda:{
        backgroundColor: '#F2F3FA',
        borderRadius:5,
        alignItems: 'center', 
        justifyContent: 'center',
        width:141,
        height:50,
        marginTop:20,
    },

    btnNovaVendaTxt:{
        fontSize:12,
        fontWeight:'700',
    }   
})
