import React, {useState, useEffect} from 'react';
import { Container } from './style';
import { Text, TouchableHighlight, TouchableOpacity, View, StyleSheet, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import CheckBox from '@react-native-community/checkbox';


export default ({navigation}) => {
    const [valor, setValor] = useState(null)

   useEffect(() =>{
    AsyncStorage.getItem('total').then((response)=>{
        setValor(response)
    })
   },[])

   const [pressedBtn1, setPressedBtn1] = useState(false)
   const [pressedBtn2, setPressedBtn2] = useState(false)
   const [pressedBtn3, setPressedBtn3] = useState(false)

   const apertou = (botao) => {
       if(botao == 'btn1'){
        setPressedBtn1(true)
        setPressedBtn2(false)
        setPressedBtn3(false)
       } else if (botao == 'btn2'){
        setPressedBtn1(false)
        setPressedBtn2(true)
        setPressedBtn3(false)
       } else {
        setPressedBtn1(false)
        setPressedBtn2(false)
        setPressedBtn3(true)
       }

   }

   const [option, setOption] = useState('')

   const OP = (formaPagamento, parcela) => {
        if(formaPagamento=='Dinheiro' || formaPagamento=='Cheque'){
            AsyncStorage.setItem('forma-Pagamento', formaPagamento)
            
        }else if (formaPagamento=='Cartao'){ 
            AsyncStorage.setItem('forma-Pagamento', 'Cartão')
            AsyncStorage.setItem('parcela', JSON.stringify(parcela))
        }
   }

   const armazenarTotal = (valor) => {
       AsyncStorage.setItem('total', JSON.stringify(valor))
   }
   
   // ------- MODAL --------------------------------
   const [modalVisivel, setModalVisivel] = useState(false)

   const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
   const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
   const [toggleCheckBox3, setToggleCheckBox3] = useState(false)
   const [toggleCheckBox4, setToggleCheckBox4] = useState(false)

   const [parcela, setParcela] = useState(null)
   const [valorParcela, setValorParcela] = useState(null)
   const [texto, setTexto] = useState('')

   const parcelamento = (x, valor) => {
        var result = valor/x
        return result.toFixed(2)
    }

    const selecao = (op, valor) => {
        if(op == 2){
            setToggleCheckBox1(true)
            setToggleCheckBox2(false)
            setToggleCheckBox3(false)
            setToggleCheckBox4(false)
            setParcela(2)
            setValorParcela(parcelamento(op, valor))
        }else if(op == 3){
            setToggleCheckBox1(false)
            setToggleCheckBox2(true)
            setToggleCheckBox3(false)
            setToggleCheckBox4(false)
            setParcela(3)
            setValorParcela(parcelamento(op, valor))
        }else if(op == 4){
            setToggleCheckBox1(false)
            setToggleCheckBox2(false)
            setToggleCheckBox3(true)
            setToggleCheckBox4(false)
            setParcela(4)
            setValorParcela(parcelamento(op, valor))
        }else if(op == 5){
            setToggleCheckBox1(false)
            setToggleCheckBox2(false)
            setToggleCheckBox3(false)
            setToggleCheckBox4(true)
            setParcela(5)
            setValorParcela(parcelamento(op, valor))
        }
    }


    return(
        <Container>
         
            <Text style={{color: '#075598', fontSize:20, textAlign:'center', marginBottom:30}}>Escolha a forma de pagamento</Text>

            <TouchableHighlight    
                activeOpacity={0.6}
                underlayColor="#075598" 
                style={[estilo.btn, {backgroundColor: pressedBtn1==true? '#075598' :  '#F2F3FA' }]}
                onPress={()=>{ apertou('btn1') , OP('Dinheiro', null),  setModalVisivel(false)}}>

                <View style={estilo.div}>
                    <MaterialCommunityIcons name="cash-usd-outline" size={24} style={[estilo.icon, {color:pressedBtn1==true?  '#fff' : '#0CB1CD'}]} />
                    <Text style={[estilo.txt, {color:pressedBtn1==true?  '#fff' : '#075598' }]}>Dinheiro</Text>
                </View>

            </TouchableHighlight>

            <TouchableHighlight 
                activeOpacity={0.6}
                underlayColor="#075598" 
                style={[estilo.btn, {backgroundColor: pressedBtn2==true? '#075598' :  '#F2F3FA' }]}
                onPress={()=>{ apertou('btn2'), OP('Cheque', null),   setModalVisivel(false)}}>

                <View style={estilo.div}>
                    <Ionicons name="ios-wallet-outline" size={24} style={[estilo.icon, {color:pressedBtn2==true?  '#fff' : '#0CB1CD'}]} />
                    <Text style={[estilo.txt, {color:pressedBtn2==true?  '#fff' : '#075598' }]}>Cheque</Text>
                </View>

            </TouchableHighlight>

            <TouchableHighlight 
                activeOpacity={0.6}
                underlayColor="#075598" 
                style={[estilo.btn, {backgroundColor: pressedBtn3==true? '#075598' :  '#F2F3FA' }]} 
                onPress={()=>{ apertou('btn3') ,   setModalVisivel(true)}}>

                <View style={estilo.div}>
                    <Entypo name="credit-card" size={24} style={[estilo.icon, {color:pressedBtn3==true?  '#fff' : '#0CB1CD'}]} />
                    <Text style={[estilo.txt, {color:pressedBtn3==true?  '#fff' : '#075598' }]}>Cartão {texto}</Text>
                </View>

            </TouchableHighlight>

            <View style={{flexDirection:'row', marginTop:10, marginBottom:20}}>
                <Text style={{fontSize:16, marginRight: 10}}>Total:</Text>
                <Text style={{fontSize:16, fontWeight:'700' ,color:'#075598'}}>R$ {valor}</Text>
            </View>

            <TouchableOpacity style={[estilo.btnAvancar, estilo.btnFinalizar]} onPress={()=>{navigation.navigate('Pagamento Finalizado'), armazenarTotal(valor) } }>
                <Text style={estilo.txtAvancar}>Finalizar</Text> 
            </TouchableOpacity>

            <View>
                <Modal
                    animationType='slide'
                    transparent={true}  
                    visible={modalVisivel}        
                >   
                
                    <View style={{alignItems: 'center', justifyContent: 'center', flex:1, backgroundColor:'rgba(0,0,0,0.5)'}}>
                        <View style={{backgroundColor: '#fff', height:400, width:250, borderRadius:5, alignItems: 'center', padding:25}}>
                            <Text style={{color: '#075598', fontSize:20, marginBottom:20, textAlign: 'center'}}>Parcelamento cartão de crédito</Text>
                            
                            <View style={{height:180}}>
                                <View style={estilo.parcelamento}>
                                    <CheckBox
                                    disabled={false}
                                    value={toggleCheckBox1}
                                    onValueChange={() => selecao(2, valor)}
                                    tintColors ={{true: '#075598'}}
                                    />
                                    <Text>2 x R$</Text>
                                    <Text> {parcelamento(2, valor)} </Text> 
                                    <Text>sem juros</Text>
                                </View>

                            
                                <View style={[estilo.parcelamento, estilo.borda]}>
                                    <CheckBox
                                    disabled={false}
                                    value={toggleCheckBox2}
                                    onValueChange={() => selecao(3, valor)}
                                    tintColors ={{true: '#075598'}}
                                    />
                                    <Text>3 x R$</Text>
                                    <Text> {parcelamento(3, valor)} </Text> 
                                    <Text>sem juros</Text>
                                </View>

                                <View style={[estilo.parcelamento, estilo.borda]}>
                                    <CheckBox
                                    disabled={false}
                                    value={toggleCheckBox3}
                                    onValueChange={() => selecao(4, valor)}
                                    tintColors ={{true: '#075598'}}
                                    />
                                    <Text>4 x R$</Text>
                                    <Text> {parcelamento(4, valor)} </Text> 
                                    <Text>sem juros</Text>
                                </View>

                                <View style={[estilo.parcelamento, estilo.borda]}>
                                    <CheckBox
                                    disabled={false}
                                    value={toggleCheckBox4}
                                    onValueChange={() => selecao(5, valor)}
                                    tintColors ={{true: '#075598'}}
                                    />
                                    <Text>5 x R$ </Text>
                                    <Text>  {parcelamento(5, valor)} </Text> 
                                    <Text>sem juros</Text>
                                </View>

                            </View>

                            {/* armazenar(), */}
                            <TouchableOpacity style={[estilo.btnAvancar, estilo.btnAvancarModal]} onPress={() =>{setModalVisivel(false),setTexto(parcela + ' x R$ ' + valorParcela + ' sem juros'),  OP('Cartao',parcela)}} > 
                                <Text style={estilo.txtAvancar}>ok</Text> 
                            </TouchableOpacity>

                        </View>         
                    </View> 
                </Modal>
            </View>

            
        </Container>
    )
}

const estilo = StyleSheet.create({
    btn:{    
        height: 60,
        width: 270,
        borderRadius:5,
        marginBottom: 10,
        
    },

    div:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height:60,
    },

    icon:{
        marginRight: 20,
        color: '#0CB1CD',
    },

    txt:{
        fontSize: 14,
        fontWeight: '700',    
    },

    btnAvancar:{
        backgroundColor: '#075598', 
        height: 50, 
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',  
        
    },

    btnFinalizar:{
        width: 300,
    },

    btnAvancarModal:{
        width: 200,
        marginTop:50
    },

    txtAvancar:{
        fontSize: 12,
        fontWeight: '700',
        color: '#fff',
        textTransform:'uppercase'
    },

    parcelamento:{
        flexDirection:'row', 
        alignItems: 'center',
        paddingVertical:10 ,
    },

    borda:{
        borderTopColor: '#D5D5D5',
        borderTopWidth: 1,
    }
})