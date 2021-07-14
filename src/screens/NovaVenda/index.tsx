import React from 'react';
import { Container, MainDiv } from './style';
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { Octicons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Feather } from '@expo/vector-icons';
import {GlobalStyles} from '../../../style/globalStyle'

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
                <Text style={[GlobalStyles.primaryColor,{fontSize:18, fontWeight:'700'}]}>Nova Venda</Text>
                <Pressable onPress={()=>{navigation.openDrawer()}}>
                    <Feather name="menu" size={24} style={[GlobalStyles.primaryColor, {marginLeft:50}]}/>
                </Pressable>
            </View>

            <Container style={GlobalStyles.backgroundWhite}>        
                <MainDiv>            

                    <Text style={[GlobalStyles.darkGreyColor, {fontSize:15, marginLeft: 10, marginBottom:10}]}>Cliente:</Text>
                    
                    <View style={{flexDirection:'row'}}>
                        <TextInput
                            value={route.params?.nome}
                            style={ [GlobalStyles.backgroundGrey,{height:50, width:255, borderRadius:3, marginBottom:25, paddingLeft:10}]}
                        />

                        <TouchableOpacity 
                            onPress={()=>navigation.navigate('Clientes', false)}
                            style={[GlobalStyles.backgroundGrey,{justifyContent: 'center', paddingRight:17,  marginBottom:25, height:50}]}>
                            <Octicons name="search" size={24} style={GlobalStyles.primaryColor} /> 
                        </TouchableOpacity>
                    </View>
                
                    <View >
                        <Pressable
                            onPress={()=>route.params?.nome == null? '': navigation.navigate('Nova Venda Produtos', nome)}
                            style={[GlobalStyles.backgroundPrimary,GlobalStyles.button]}
                        >
                            <Text style={[GlobalStyles.whiteColor, { fontSize:17, textTransform:'capitalize'}]}>Avançar</Text>
                        </Pressable>
                    </View>     

                    <MainDiv.ViewText>
                        <MainDiv.Text style={GlobalStyles.primaryColor}>Novo cliente?</MainDiv.Text>
                        <MainDiv.Text style={GlobalStyles.primaryColor}>Cadastre ele agora mesmo!</MainDiv.Text>
                    </MainDiv.ViewText>
    
                    <MainDiv.ButtonView >
                        <MainDiv.ButtonView.Button onPress={()=>navigation.navigate('Novos Clientes')}>
                            <MainDiv.Text style={[GlobalStyles.primaryColor, {fontWeight:'bold'}]}>+ Novos Clientes</MainDiv.Text>
                        </MainDiv.ButtonView.Button>  
                    </MainDiv.ButtonView >

                </MainDiv>  
            </Container>
        </>
    )
}
