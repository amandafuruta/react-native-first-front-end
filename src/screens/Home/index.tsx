import React, {useState} from 'react';
import { Container, Scroller, TopDiv, DivMiddle, DivBottom, DivMovimentacao } from './style';
import { Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import ListaPlana from '../../components/listaPlana'
import {useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native'



export default ({navigation}) => { 
    
    // const navigation = useNavigation();

    // const handleClick = () => {
        
    // }

    const [visible, setVisible] = useState(true)
 
    return(
        <Container>
            <Scroller>
                <StatusBar hidden={true}/>
                
                <TopDiv>
                    <TopDiv.Txt>App Lets</TopDiv.Txt>
                </TopDiv>

                <DivMiddle>
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
                                    style={{color:"#075598", fontSize:20, fontWeight:'bold', width:100}}
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

                <DivBottom>     

                    <DivBottom.Top>    
                        <Image
                            source={require('../../../assets/grupo156.jpg')}
                            style={estilo.imgDivBottom}
                        />
                        <DivBottom.Top.Div>
                            <DivBottom.Top.Div.Title>Boas Vendas!</DivBottom.Top.Div.Title>
                            <DivBottom.Top.Div.Subtitle>Você teve um rendimento <Text style={{color:'#3FBF7A', fontWeight:'600'}}>24% melhor</Text> que a última semana! Continue assim!</DivBottom.Top.Div.Subtitle>
                        </DivBottom.Top.Div>
                    </DivBottom.Top> 

                    <DivBottom.Buttons style={{marginBottom:15}}>
                        <DivBottom.Buttons.Touch onPress={() => navigation.navigate('Metas')} style={{marginRight:15}}>
                            <Image source={require("../../../assets/metas.jpg")} style={{width:30, height:30, marginBottom:8}}/>
                            <DivBottom.Buttons.Touch.Text>Metas</DivBottom.Buttons.Touch.Text>
                        </DivBottom.Buttons.Touch> 

                        <DivBottom.Buttons.Touch /*onPress={()=>}*/>
                            <Image source={require("../../../assets/clientes.jpg")} style={{width:30, height:30, marginBottom:8}}/>
                            <DivBottom.Buttons.Touch.Text>Clientes</DivBottom.Buttons.Touch.Text>
                        </DivBottom.Buttons.Touch>   
                    </DivBottom.Buttons>  
 
                    <DivBottom.Buttons style={{marginBottom:35}} >
                        <DivBottom.Buttons.Touch /*onPress={()=>}*/ style={{marginRight:5}}>
                            <Image source={require("../../../assets/perform.jpg")} style={{width:30, height:30, marginBottom:8}}/>
                            <DivBottom.Buttons.Touch.Text>Performance</DivBottom.Buttons.Touch.Text>
                        </DivBottom.Buttons.Touch> 

                        <DivBottom.Buttons.Touch /*onPress={()=>}*/ style={{marginLeft:10}}>
                            <Image source={require("../../../assets/newsale.jpg")} style={{width:30, height:30, marginBottom:8}}/>
                            <DivBottom.Buttons.Touch.Text>Metas</DivBottom.Buttons.Touch.Text>
                        </DivBottom.Buttons.Touch>   
                    </DivBottom.Buttons>  

                </DivBottom>
            
                <DivMovimentacao>
                    <DivMovimentacao.Title>Últimas movimentações</DivMovimentacao.Title>
                    <ListaPlana/>    
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