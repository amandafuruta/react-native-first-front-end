import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';

const movimentacoes = [
  {
    id: '001',
    data: '08/05',
    hora: '14:23',
    descricao: 'Bar da Maria',
    valor: '89,45'
  },
  {
    id: '002',
    data: '09/05',
    hora: '16:12',
    descricao: 'Padaria V. Santa',
    valor: '189,45'
  },
  {
    id: '003',
    data: '08/05',
    hora: '14:23',
    descricao: 'Bar da Maria',
    valor: '89,45'
  },
  {
    id: '004',
    data: '09/05',
    hora: '16:12',
    descricao: 'Padaria V. Santa',
    valor: '189,45'
  },
];

export default function () {
  return (
    <View>
      <FlatList
        data={movimentacoes}
        keyExtractor={item => item.id}
        renderItem={({item}) => (

          <View style={parseInt(item.id) % 2 == 0? {backgroundColor:'#fff'} : {backgroundColor:'#F1F1F1', borderColor:'#707070', borderWidth:0.5}}>
            <View  style={estilo.divView}>
              <View style={{flexDirection:'row', width: 230}}>
                <Text style={estilo.text}>
                  {item.data} : {item.hora}
                </Text>

                <Text style={estilo.text}>
                  {item.descricao}
                </Text>
              </View>

              <View>
                < Text style={estilo.textValor}>
                  <Text style={estilo.textTransparent}>R$: </Text>{item.valor}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
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
    color:'#666666',
    fontSize: 12,
    marginRight: 20,
  },

  textTransparent: {
    fontSize: 12,
    color: '#AAAAAA',
  },

  textValor:{
    fontSize: 12,
    color: '#075598',
    fontWeight:'600',
  }
});
