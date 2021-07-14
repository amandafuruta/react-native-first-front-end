import React from 'react';
import { Container, MainDiv } from './style';
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { Octicons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Feather } from '@expo/vector-icons';

export default ({navigation, route}) => {
    const nome = route.params?.nome

    const ArmazenarLocalstorage= (chave, valor) => {
        AsyncStorage.setItem(chave,valor)
    }

    React.useEffect(() => {
        if (route.params?.nome) {
            ArmazenarLocalstorage('cliente', route.params?.nome)
          // Post updated, do something with `route.params.post`
          // For example, send the post to the server
        }
      }, [route.params?.nome]);

    return(
        <>
            <View style={{alignSelf: "stretch", backgroundColor:'#F1F1F1', flexDirection:'row', height:80, alignItems: 'center', paddingRight:40, paddingLeft:120, justifyContent: 'space-between'}}>
                <Text style={{fontSize:18, fontWeight:'700' , color:'#075598'}}>Nova Venda</Text>
                <Pressable onPress={()=>{navigation.openDrawer()}}>
                    <Feather name="menu" size={24} color="#075598" style={{marginLeft:50}}/>
                </Pressable>
            </View>

            <Container>        
                <MainDiv>            

                    <Text style={{fontSize:15, color:'#666666', marginLeft: 10, marginBottom:10}}>Cliente:</Text>
                    
                    <View style={{flexDirection:'row'}}>
                        <TextInput
                            value={route.params?.nome}
                            style={{backgroundColor:'#f1f1f1', height:50, width:255, borderRadius:3, marginBottom:25, paddingLeft:10}}
                        />

                        <TouchableOpacity 
                            onPress={()=>navigation.navigate('Clientes', false)}
                            style={{backgroundColor: '#f1f1f1', justifyContent: 'center', paddingRight:17,  marginBottom:25, height:50}}>
                            <Octicons name="search" size={24} color="#353F92" /> 
                        </TouchableOpacity>
                    </View>
                
                    <View >
                        <Pressable
                            onPress={()=>route.params?.nome == null? '': navigation.navigate('Nova Venda Produtos', nome)}

                        style={{backgroundColor:'#075598', width:'100%', height:50, borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}
                        >
                            <Text style={{color:'#fff', fontSize:17, textTransform:'capitalize', }}>Avançar</Text>
                        </Pressable>
                    </View>     

                    <MainDiv.ViewText>
                        <MainDiv.Text>Novo cliente?</MainDiv.Text>
                        <MainDiv.Text>Cadastre ele agora mesmo!</MainDiv.Text>
                    </MainDiv.ViewText>
    
                    <MainDiv.ButtonView >
                        <MainDiv.ButtonView.Button onPress={()=>navigation.navigate('Novos Clientes')}>
                            <MainDiv.Text style={{fontWeight:'bold'}}>+ Novos Clientes</MainDiv.Text>
                        </MainDiv.ButtonView.Button>  
                    </MainDiv.ButtonView >

                </MainDiv>  
            </Container>
        </>
    )
}
