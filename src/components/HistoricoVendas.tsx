import React, {useState} from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import { GlobalStyles } from '../../style/globalStyle';

const movimentacoes = [
  {
    id: '001',
    data: '08/05',
    hora: '14:23',
    descricao: 'Bar da Maria',
    valor: '89,45',
    codigo: '25421542',
    pagamento: 'Dinheiro'
  },
  {
    id: '002',
    data: '09/05',
    hora: '16:12',
    descricao: 'Padaria V. Santa',
    valor: '189,45',
    codigo: '25421542',
    pagamento: 'Cheque'
  },
  {
    id: '003',
    data: '08/05',
    hora: '14:23',
    descricao: 'Bar da Maria',
    valor: '89,45',
    codigo: '25421542',
    pagamento: '3x sem juros'
  },
  {
    id: '004',
    data: '09/05',
    hora: '16:12',
    descricao: 'Padaria V. Santa',
    valor: '189,45',
    codigo: '25421542',
    pagamento: '2x sem juros'
  },
  {
    id: '005',
    data: '08/05',
    hora: '14:23',
    descricao: 'Bar da Maria',
    valor: '89,45',
    codigo: '25421542',
    pagamento: 'Dinheiro'
  },
  {
    id: '006',
    data: '09/05',
    hora: '16:12',
    descricao: 'Padaria V. Santa',
    valor: '189,45',
    codigo: '25421542',
    pagamento: '3x sem juros'
  },
  {
    id: '007',
    data: '08/05',
    hora: '14:23',
    descricao: 'Bar da Maria',
    valor: '89,45',
    codigo: '25421542',
    pagamento: '3x sem juros'
  },
  {
    id: '008',
    data: '09/05',
    hora: '16:12',
    descricao: 'Padaria V. Santa',
    valor: '189,45',
    codigo: '25421542',
    pagamento: '5x sem juros'
  },
];

export default function () {
  const [abrirModal, setAbrirModal] = useState(false)

  const [data, setData] = useState('')
  const [hora, setHora] = useState('')
  const [cliente, setCliente] = useState('')
  const [valor, setValor] = useState('')
  const [codigo, setCodigo] = useState('')
  const [pagamento, setPagamento] = useState('')

  const setar = (data, hora, descricao, valor, codigo, pagamento) =>{
    setData(data)
    setHora(hora)
    setCliente(descricao)
    setValor(valor)
    setCodigo(codigo)
    setPagamento(pagamento)
  }

  return (
    <View>
      <FlatList
        data={movimentacoes}
        keyExtractor={item => item.id}
        renderItem={({item}) => (

          <TouchableOpacity 
            style={parseInt(item.id) % 2 == 0? {backgroundColor:'#fff'} : {backgroundColor:'#F1F1F1', borderColor:'#D6D6D6', borderWidth:0.5}}
            onPress={_=>{ setAbrirModal(true), setar(item.data,item.hora, item.descricao, item.valor, item.codigo, item.pagamento) }}
            >
            <View  style={estilo.divView}>
              <View style={{flexDirection:'row', width: 230}}>
                <Text style={[estilo.text, GlobalStyles.darkGreyColor]}>
                  {item.data} : {item.hora}
                </Text>

                <Text style={[estilo.text, GlobalStyles.darkGreyColor]}>
                  {item.descricao}
                </Text>
              </View>

              <View>
                < Text style={[estilo.textValor, GlobalStyles.primaryColor]}>
                  <Text style={[estilo.textTransparent, GlobalStyles.lightGreyColor]}>R$: </Text>{item.valor}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <View>
        <Modal
            animationType='slide'
            transparent={true}  
            visible={abrirModal}        
        >  
          <View style={{alignItems: 'center', justifyContent: 'center', flex:1, backgroundColor:'rgba(0,0,0,0.5)'}}>
            <View style={{backgroundColor: '#fff', height:400, width:300, borderRadius:5, alignItems: 'center', paddingTop:50}}>
              
              <View style={{flexDirection:'row',  paddingRight:20}}>

                <View style={[estilo.listDiv, { alignItems:'flex-end', width:150,marginRight:20}]}>
                  <Text style={[estilo.listTxt, estilo.listTitle, GlobalStyles.darkGreyColor]}>Cód.venda:</Text>
                  <Text style={[estilo.listTxt, estilo.listTitle, GlobalStyles.darkGreyColor]}>Data da transação:</Text>
                  <Text style={[estilo.listTxt, estilo.listTitle, GlobalStyles.darkGreyColor]}>Cliente:</Text>
                  <Text style={[estilo.listTxt, estilo.listTitle, GlobalStyles.darkGreyColor]}>Valor: </Text>
                  <Text style={[estilo.listTxt, estilo.listTitle, GlobalStyles.darkGreyColor]}>Forma de pagamento:</Text>
                </View>

                <View style={estilo.listDiv}> 
                  <Text style={[GlobalStyles.primaryColor, {fontSize:18, fontWeight:'700', paddingVertical: 8}]}>{codigo}</Text>
                  <Text style={[estilo.listTxt, GlobalStyles.darkGreyColor]}>{data} às {hora}</Text>
                  <Text style={[estilo.listTxt, GlobalStyles.darkGreyColor]}>{cliente}</Text>
                  <View style={{flexDirection:'row'}}>
                    <Text style={[GlobalStyles.lightGreyColor, {fontSize:14,  paddingVertical:10, marginRight:5}]} >R$</Text>
                    <Text style={[GlobalStyles.primaryColor, {fontSize:14, paddingVertical:10}]}>{valor}</Text>
                  </View>
                  <Text style={[estilo.listTxt, GlobalStyles.darkGreyColor]}>{pagamento}</Text>
                </View>

              </View>

              <TouchableOpacity style={[estilo.btn, GlobalStyles.backgroundPrimary, GlobalStyles.button]} onPress={()=>{setAbrirModal(false)}}>
                <Text style={[estilo.btnTxt, GlobalStyles.whiteColor]}>Voltar</Text>
              </TouchableOpacity>
                    
            </View>
          </View>

        </Modal> 
      </View>
    </View>

    
  );
}

const estilo = StyleSheet.create({
  divView:{
    flexDirection:'row', 
    paddingTop: 23,
    paddingBottom: 23,
    paddingLeft: 36,
    paddingRight: 36,
  },

  text: {
    fontSize: 14,
    marginRight: 20,
  },

  textTransparent: {
    fontSize: 14,
  },

  textValor:{
    fontSize: 14,
    fontWeight:'600',
  },

  btn:{
    width: 200,
    marginTop:50
  },

  btnTxt:{
    fontSize: 12,
    fontWeight: '700',
    textTransform:'uppercase'
  },

  listDiv:{
    flexDirection:'column',
  },

  listTxt:{
    fontSize: 14,
    paddingVertical:10,
  },

  listTitle:{
    fontWeight:'bold'
  }

});
