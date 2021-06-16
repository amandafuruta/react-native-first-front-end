import React, {useState} from 'react'
import { Container , Header, TopButtons } from './style'
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native'
import ListaProdutos from '../../components/ListaProdutos'
import FabButton from '../../components/FabButton'

export default ({navigation}) => {

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

    return(
        <Container>
            <ScrollView>

                <Header>  
                    <Header.Text>Produtos</Header.Text>
                </Header>

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

                <View>

                    <ListaProdutos/>

                </View>

            </ScrollView>


            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Novo Produto')}>
                <Text style={styles.txt}>+ Adicionar Produtos</Text>
            </TouchableOpacity>
            
                {/* <FabButton nome='+ Adicionar Produtos'  />  */}
                       
        </Container>
    )
}

const styles = StyleSheet.create({

    btn:{
        backgroundColor: '#075598', 
        height: 50, 
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 90,
        paddingRight:90,
        position: 'absolute',
        bottom: 20,
        right: 30,
    },
    
    txt:{
        fontSize: 12,
        fontWeight: '700',
        color: '#fff',
    }
})
