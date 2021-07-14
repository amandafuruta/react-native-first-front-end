import React, {useState} from 'react';
import { Container, Scroller, TopDiv, DivMiddle, DivBottom, DivMovimentacao } from './style';
import { Text, Image, StyleSheet, TextInput, Pressable, View } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'
import ListaPlana from '../../components/HistoricoVendas'
import { StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import {GlobalStyles} from '../../../style/globalStyle'

export default ({navigation}) => { 
    
    const [visible, setVisible] = useState(true)
 
    return(
        <Container>
            
            <StatusBar hidden={true}/>

            <View style={{ position:'absolute', alignSelf:'stretch', right:0, left:0}}>
                <TopDiv style={GlobalStyles.backgroundPrimary} >
                    <View style={{alignSelf: "stretch", alignItems:'flex-end', paddingRight:20}}>
                        <TouchableOpacity onPress={()=>{navigation.openDrawer()}}>
                            <Feather name="menu" size={24} color="white" style={{marginLeft:50}}/>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TopDiv.Txt style={GlobalStyles.whiteColor}>App Lets</TopDiv.Txt>
                    </View>
                </TopDiv>

                

                <DivMiddle style={GlobalStyles.backgroundGrey}>
                    <DivMiddle.Box>    
                        <Image
                            source={require('../../../assets/profile.jpg')}
                            style={estilo.img}
                        />
                        <DivMiddle.Text> 
                            <DivMiddle.Text.Subtitle>Últimos 7 dias</DivMiddle.Text.Subtitle>
                            <DivMiddle.Text.Value>
                                <DivMiddle.Text.Value.Cifrao>R$</DivMiddle.Text.Value.Cifrao>
                                <TextInput
                                    value='3.201,29'
                                    secureTextEntry={visible? true : false}
                                    style={[GlobalStyles.primaryColor,{fontSize:20, fontWeight:'bold', width:100}]}
                                />
                                <TouchableOpacity onPress={()=>setVisible(!visible)} >
                                        <Image 
                                            style={{width:25, height:25, resizeMode:'contain'}}
                                            source={visible? require('../../../assets/openeyes.jpg') : require('../../../assets/closeeyes.jpg')}
                                        />
                                </TouchableOpacity>
                            </DivMiddle.Text.Value>  
                        </DivMiddle.Text>
                    </DivMiddle.Box>
                </DivMiddle> 
            </View>

             <Scroller  >
                <DivBottom style={[GlobalStyles.backgroundWhite, {elevation:1, marginTop:230}]}>     

                    <DivBottom.Top>    
                        <Image
                            source={require('../../../assets/grupo156.jpg')}
                            style={estilo.imgDivBottom}
                        />
                        <DivBottom.Top.Div>
                            <DivBottom.Top.Div.Title style={GlobalStyles.primaryColor}>Boas Vendas!</DivBottom.Top.Div.Title>
                            <DivBottom.Top.Div.Subtitle>Você teve um rendimento <Text style={{color:'#3FBF7A', fontWeight:'600'}}>24% melhor</Text> que a última semana! Continue assim!</DivBottom.Top.Div.Subtitle>
                        </DivBottom.Top.Div>
                    </DivBottom.Top> 

                    <DivBottom.Buttons style={{marginBottom:15}}>
                        <DivBottom.Buttons.Touch onPress={() => navigation.navigate('Metas')} style={[GlobalStyles.backgroundGrey, {marginRight:15}]}>
                            <Image source={require("../../../assets/metas.jpg")} style={{width:30, height:30, marginBottom:8}}/>
                            <DivBottom.Buttons.Touch.Text style={GlobalStyles.primaryColor}>Metas</DivBottom.Buttons.Touch.Text>
                        </DivBottom.Buttons.Touch> 
 
                        <DivBottom.Buttons.Touch onPress={() => navigation.navigate('Clientes', true)} style={GlobalStyles.backgroundGrey}>
                            <Image source={require("../../../assets/clientes.jpg")} style={{width:30, height:30, marginBottom:8}}/>
                            <DivBottom.Buttons.Touch.Text style={GlobalStyles.primaryColor}>Clientes</DivBottom.Buttons.Touch.Text>
                        </DivBottom.Buttons.Touch>   
                    </DivBottom.Buttons>  
 
                    <DivBottom.Buttons style={{marginBottom:35}} >
                        <DivBottom.Buttons.Touch  style={[GlobalStyles.backgroundGrey, {marginRight:5}]}>
                            <Image source={require("../../../assets/perform.jpg")} style={{width:30, height:30, marginBottom:8}}/>
                            <DivBottom.Buttons.Touch.Text style={GlobalStyles.primaryColor}>Performance</DivBottom.Buttons.Touch.Text>
                        </DivBottom.Buttons.Touch> 

                        <DivBottom.Buttons.Touch onPress={()=>navigation.navigate('Minha Venda')} style={[GlobalStyles.backgroundGrey, {marginLeft:10}]}>
                            <Image source={require("../../../assets/newsale.jpg")} style={{width:30, height:30, marginBottom:8}}/>
                            <DivBottom.Buttons.Touch.Text style={GlobalStyles.primaryColor}>Minhas vendas</DivBottom.Buttons.Touch.Text>
                        </DivBottom.Buttons.Touch>   
                    </DivBottom.Buttons>  

                </DivBottom>
            
                <DivMovimentacao style={GlobalStyles.backgroundWhite}>
                    <DivMovimentacao.Title style={GlobalStyles.primaryColor}>Últimas movimentações</DivMovimentacao.Title>
                    <ListaPlana />    
                </DivMovimentacao>
            </Scroller> 
        </Container>
    )
}  


const estilo = StyleSheet.create({
    img:{
        height:65,
        width:65,
        borderRadius:100,
        marginRight: 24,
    },

    imgDivBottom:{
        width:146,
        height:120,
        marginRight:20,
    }
})