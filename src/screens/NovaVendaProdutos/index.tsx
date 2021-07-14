import React, {useState, useEffect} from 'react'
import { Container, TopButtons } from './style'
import { View,  StyleSheet, TouchableOpacity, Text } from 'react-native'
import ListaProdutos from '../../components/ListaProdutos'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {GlobalStyles} from '../../../style/globalStyle'

export default ({navigation, route} ) => {
    const nome = route.params
    const [btn1ligado, setBtn1Ligado] = useState(true)
    const [btn2ligado, setBtn2Ligado] = useState(false)
    const [btn3ligado, setBtn3Ligado] = useState(false)

    function clicked(props) {
        if(props == 'btn1'){
            setBtn2Ligado(false)
            setBtn3Ligado(false)
        }

        if (props == 'btn2'){
            setBtn1Ligado(false)
            setBtn3Ligado(false)
        } 

        if (props == 'btn3'){
            setBtn1Ligado(false)
            setBtn2Ligado(false)
        }

    }

    const [carrinho, setCarrinho] = useState(false)

    
    const validar = () => {
         AsyncStorage.getItem('carrinho').then((response)=>{
            if(response=='[]'){
               setCarrinho(false)
            }else{
                setCarrinho(true)
            }
            // console.log(JSON.stringify(response)==="[]")
            // console.log(response=='[]')
        })
       
    }


    return(
        <Container style={GlobalStyles.backgroundWhite}>

                <View style={{flexDirection:'row', paddingTop:37, paddingBottom:37, alignItems: 'center', justifyContent: 'center'}}>
                    <TopButtons onPress={()=> {setBtn1Ligado(true) ; clicked('btn1' )}} style={{backgroundColor: btn1ligado ? '#075598' : '#F2f3fA',paddingLeft:19, paddingRight:19, borderTopLeftRadius: 5, borderBottomLeftRadius:5}} >
                        <TopButtons.Text style={{color: btn1ligado ? '#fff' : '#075598'}}>Categorias</TopButtons.Text>
                    </TopButtons>

                    <TopButtons onPress={()=> {setBtn2Ligado(true) ; clicked('btn2' )}} style={{backgroundColor: btn2ligado ? '#075598' : '#F2f3fA', paddingLeft:20, paddingRight:20 }}>
                        <TopButtons.Text style={{color: btn2ligado ? '#fff' : '#075598'}}>Preço</TopButtons.Text>
                    </TopButtons>

                    <TopButtons onPress={()=> {setBtn3Ligado(true) ; clicked('btn3' )}} style={{backgroundColor: btn3ligado ? '#075598' : '#F2f3fA',paddingLeft:35, paddingRight:35, borderTopRightRadius: 5, borderBottomRightRadius: 5}}>
                        <TopButtons.Text style={{color: btn3ligado ? '#fff' : '#075598'}}>Nome</TopButtons.Text>
                    </TopButtons> 

                </View> 

                <View style={styles.lista}>

                    <ListaProdutos identificador='nova-venda'/>

                </View>

                
                <TouchableOpacity style={[styles.btn, GlobalStyles.backgroundPrimary, GlobalStyles.button]} onPress={()=>{validar(), carrinho==true? navigation.navigate('Revisão', nome): console.log('carrinho vazio')}}>
                    <Text style={[styles.txt, GlobalStyles.whiteColor]}>Avançar</Text>
                </TouchableOpacity>
                           
        </Container>
    )
}

const styles = StyleSheet.create({
   
    btn:{
        position: 'absolute',
        bottom: 20,
        width: 250,
        left: 60,
    },
    
    txt:{
        fontSize: 12,
        fontWeight: '700',
        textTransform:'uppercase'
    },

    lista:{
        marginBottom: 180,
    }
})
