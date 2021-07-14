import React , {useState} from 'react';
import { Container } from './style';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';

export default ({navigation}) => {
    const [abrirModal, setAbrirModal] = useState(false)
    const [periodo, setPeriodo] = useState('')
    return(
        <>
            <View style={{alignSelf: "stretch", backgroundColor:'#F1F1F1', flexDirection:'row', height:80, alignItems: 'center', paddingRight:40, paddingLeft:120, justifyContent: 'space-between'}}>
                <Text style={{fontSize:18, fontWeight:'700' , color:'#075598'}}>Desempenho</Text>
                <Pressable onPress={()=>{navigation.openDrawer()}}>
                    <Feather name="menu" size={24} color="#075598" style={{marginLeft:50}}/>
                </Pressable>
            </View>
            <Container>
                <View >
                    <TouchableOpacity onPress={()=>{setAbrirModal(true), setPeriodo('Hoje')}}>
                        <View style={estilo.div}>
                            <Text style={[estilo.txt,{width:100, marginRight:150}]}>Hoje</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                        </View>  
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{setAbrirModal(true), setPeriodo('Otem')}}>
                        <View style={estilo.div}>
                            <Text style={[estilo.txt,{width:100, marginRight:150}]}>Ontem</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                        </View>  
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{setAbrirModal(true), setPeriodo('Últimos 7 dias')}}>
                        <View style={estilo.div}>
                            <Text style={[estilo.txt,{width:100, marginRight:150}]}>Últimos 7 dias</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                        </View>  
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{setAbrirModal(true), setPeriodo('Últimos 30 dias')}}>
                        <View style={estilo.div}>
                            <Text style={[estilo.txt,{width:100, marginRight:150}]}>Últimos 30 dias</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                        </View>  
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{setAbrirModal(true), setPeriodo('Este mês')}}>
                        <View style={estilo.div}>
                            <Text style={[estilo.txt,{width:100, marginRight:150}]}>Este mês</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                        </View>  
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{setAbrirModal(true), setPeriodo('Mês passado')}}>
                        <View style={estilo.div}>
                            <Text style={[estilo.txt,{width:100, marginRight:150}]}>Mês passado</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                        </View>  
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{setAbrirModal(true), setPeriodo('Personalizado')}}>
                        <View style={estilo.div}>
                            <Text style={[estilo.txt,{width:100, marginRight:150}]}>Personalizado</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                        </View>  
                    </TouchableOpacity>

                </View>
                
                <Modal
                    animationType='slide'
                    transparent={true}  
                    visible={abrirModal}        
                >   
                    
                    <View style={{alignItems: 'center', justifyContent: 'center', flex:1, backgroundColor:'rgba(0,0,0,0.5)'}}>
                        <View style={{backgroundColor: '#fff', height:400, width:300, borderRadius:5, alignItems: 'center'}}>    
                            <View style={estilo.modalTop}>
                                <Text style={{fontSize:16, color:'#075598', fontWeight:'700'}}>{periodo}</Text>
                            </View>

                            <View style={{flexDirection:'row', width:300}}>
                                <View style={{width:180}}>
                                    <Text style={[estilo.modalTitle, {backgroundColor:'#F1F1F1'}]}>Cartão:</Text>
                                    <Text style={estilo.modalTitle}>Dinheiro:</Text>
                                    <Text style={[estilo.modalTitle, {backgroundColor:'#F1F1F1'}]}>Cheque:</Text>
                                    <Text style={estilo.modalTitle}>Total:</Text>
                                </View>

                                <View style={{width:120}}>
                                    <View style={{flexDirection:'row', paddingVertical:10, backgroundColor:'#F1F1F1'}}>
                                        <Text style={estilo.R$}>R$</Text>
                                        <Text style={[estilo.modalTxt,{fontSize:14}]}>189,50</Text>
                                    </View>

                                    <View style={{flexDirection:'row', paddingVertical:10}}>
                                        <Text style={estilo.R$}>R$</Text>
                                        <Text style={[estilo.modalTxt,{fontSize:14}]}>253,50</Text>
                                    </View>

                                    <View style={{flexDirection:'row', paddingVertical:10, backgroundColor:'#F1F1F1'}}>
                                        <Text style={estilo.R$}>R$</Text>
                                        <Text style={[estilo.modalTxt,{fontSize:14}]}>2053,50</Text>
                                    </View>

                                    <View style={{flexDirection:'row', paddingVertical:10, alignItems: 'center'}}>
                                        <Text style={estilo.R$}>R$</Text>
                                        <Text style={[estilo.modalTxt,{fontSize:18}]}>2053,50</Text>
                                    </View>
                                </View>
                            </View>

                            <TouchableOpacity style={[estilo.btn]} onPress={()=>{setAbrirModal(false)}}>
                                <Text style={estilo.btnTxt}>Voltar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

            </Container>
        </>
    )
}

const estilo = StyleSheet.create({
    div:{
        paddingVertical:20, 
        borderBottomColor:'#d6d6d6', 
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center'
    },
    txt:{
        fontSize:14, 
        color  : '#075598',
        fontWeight: '700',
        marginLeft: 50
    },
    btn:{
        backgroundColor: '#075598', 
        height: 50, 
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',  
        width: 200,
        marginTop:90
      },
    
      btnTxt:{
        fontSize: 12,
        fontWeight: '700',
        color: '#fff',
        textTransform:'uppercase'
      },
      
      modalTop:{
        width:300, 
        borderTopLeftRadius:5, 
        borderTopRightRadius:5, 
        height:30, 
        paddingLeft:20,
        justifyContent: 'center',
        paddingVertical:35, 
        borderBottomColor:'#F1F1F1', 
        borderBottomWidth:1    
    },

    modalTitle:{
        fontSize:14, 
        color: '#666666',
        fontWeight: '700',
        paddingVertical:10, 
        paddingHorizontal:20, 
    },

    modalTxt:{
        color: '#075598',
        fontWeight: '700',
    },

    R$:{
        fontSize: 12,
        color: '#AAAAAA',
        marginRight:15
    }
})
