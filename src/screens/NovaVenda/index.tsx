import React from 'react';
import { Container, MainDiv } from './style';
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { Octicons } from '@expo/vector-icons'; 



export default ({navigation}) => {

    const handleClick = () =>{

    }

    return(
        <Container>
            <MainDiv>
                <Text style={{fontSize:15, color:'#666666', marginLeft: 10, marginBottom:10}}>Cliente:</Text>
                
                <View style={{flexDirection:'row'}}>
                    <TextInput
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
                        onPress={handleClick}
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
    )
}
