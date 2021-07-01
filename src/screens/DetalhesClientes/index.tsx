import React, {useState, useRef} from 'react';
import { Container, Body } from './style';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';

import { Form } from '@unform/mobile';
import Input from '../../components/Input';

export default ({route}) => {
    const { item } = route.params
    const [btnDadosligado, setBtnDadosLigado] = useState(true)
    const [btnTransacaoligado, setBtnTransacaoLigado] = useState(false)

    const formRef = useRef(null);

    function handleSubmit(data, { reset }) {
        console.log(data);

        reset();
    }

    function clicked(props) {
        if(props == 'btn-dados'){
            setBtnDadosLigado(true)
            setBtnTransacaoLigado(false)
        }

        if (props == 'btn-Transacao'){
            setBtnDadosLigado(false)
            setBtnTransacaoLigado(true)
        } 
    }

    
    var contador = 0
    function contar (){
        return contador++
    }
    return(
        <Container>
            <ScrollView>
                <View style={{borderBottomColor: '#075598', borderBottomWidth: 1, paddingTop:30}}>     
                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={()=> {setBtnDadosLigado(true) ; clicked('btn-dados' )}} style={{marginHorizontal:10, borderBottomColor:'#075598', paddingBottom: 15, borderBottomWidth:btnDadosligado? 5 : null }}>
                            <Text style={{fontSize: 15, color: btnDadosligado? '#075598' : '#8dbfe8'}} >Dados</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> {clicked('btn-Transacao' )}} style={{marginHorizontal:10, borderBottomColor:'#075598', paddingBottom: 15, borderBottomWidth:btnTransacaoligado? 5 : null }}>
                            <Text style={{fontSize: 15, color: btnTransacaoligado? '#075598' : '#8dbfe8'}}>Transações</Text>
                        </TouchableOpacity>

                    </View> 
                </View>

                <Body style={{display: btnDadosligado ? 'flex' : "none"}}>
                    <Form ref={formRef} onSubmit={handleSubmit} initialData={item}>
                   
                        <Input name="nome" label="Nome/ Razão Social" require />

                        <Input name="cnpj" label="CNPJ" require />

                        <Input name="responsavel" label="Responsável" require />

                        <Input name="telefone" label="Telefone" require />                  

                        <Input name="cidade" label="Cidade" require />
                    </Form>
                </Body>   

                <TouchableOpacity 
                    style={{display: btnDadosligado ? 'flex' : "none", backgroundColor:"#075598", borderRadius: 5, marginHorizontal:30, alignItems: "center", justifyContent: "center", height: 50, marginBottom: 30}}>
                    <Text style={{textTransform:"uppercase", color:"#fff", fontSize: 15}}>Salvar dados</Text>
                </TouchableOpacity>

                <View style={{display: btnTransacaoligado ? 'flex' : "none"}}>
                    <FlatList
                        data={item.transacao}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
                            <View style={{flexDirection:'row', height:56, paddingHorizontal: 30, alignItems: 'center', backgroundColor: contar() % 2 == 0? '#fff' : '#F1F1F1'}}>
                                <View style={{width: 110, marginRight:15}}>
                                    <Text style={estilo.txt}>{item.hora} às {item.data}</Text>
                                </View>
 
                                <View style={{width: 80,  marginRight: 15}}>
                                    <Text style={estilo.txt}>{item.code}</Text>
                                </View>
                                
                                <View style={{width: 110, flexDirection:'row'}}>
                                    <Text style={[estilo.txt, {marginRight:10}]}>R$:</Text>
                                    <Text style={[estilo.txt, {color:'#075598'} ]}>{item.valor}</Text>
                                </View>
                            
                            </View>
                        )}
                    />
                </View> 

            </ScrollView>
        </Container>
    )
}

const estilo = StyleSheet.create({
    txt:{
        fontSize: 12,
        fontWeight: 'bold',                                     
        color: '#666666',
    }
})