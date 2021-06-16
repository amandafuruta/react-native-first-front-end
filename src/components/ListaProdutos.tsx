import React from 'react';
import {Text, View, FlatList, StyleSheet, Image} from 'react-native';

const produtos = [
  {
    id: '001',
    foto: require('../../assets/produto1.jpg'),
    descricao: 'Apresuntado Sadia',
    preco: '23,90',
    unidade: '10'
  },
  {
    id: '002',
    foto: require('../../assets/produto2.jpg'),
    descricao: 'Queijo Mussarela',
    preco: '23,90',
    unidade: '3'
  },
  {
    id: '003',
    foto: require('../../assets/produto3.jpg'),
    descricao: 'Mortadela Seara',
    preco: '23,90',
    unidade: '5'
  },
  {
    id: '004',
    foto: require('../../assets/produto1.jpg'),
    descricao: 'Apresuntado Sadia',
    preco: '23,90',
    unidade: '0'
  },
  {
    id: '005',
    foto: require('../../assets/produto1.jpg'),
    descricao: 'Apresuntado Sadia',
    preco: '23,90',
    unidade: '10'
  },
  {
    id: '006',
    foto: require('../../assets/produto2.jpg'),
    descricao: 'Queijo Mussarela',
    preco: '23,90',
    unidade: '3'
  },
  {
    id: '007',
    foto: require('../../assets/produto3.jpg'),
    descricao: 'Mortadela Seara',
    preco: '23,90',
    unidade: '5'
  },
  {
    id: '008',
    foto: require('../../assets/produto1.jpg'),
    descricao: 'Apresuntado Sadia',
    preco: '23,90',
    unidade: '0'
  },
];

export default function () {
  return (
    <View>
      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (

          <View style={{borderBottomColor:'#707070', borderBottomWidth:0.5}}>
            <View  style={estilo.divView}>
                <View >
                    <Image 
                        style={{width:50, height:50, alignSelf: 'center', borderRadius:300}}
                        source={item.foto}
                    />
                </View>

                <View style={{flexDirection:'column', width: 210,  justifyContent: 'center', paddingLeft: 20}} >
                    <Text style={estilo.textDescricao}>
                        {item.descricao}
                    </Text>

                    <Text style={estilo.text}>
                        R${item.preco}
                    </Text>
                </View>

              <View style={{justifyContent: 'center'}}>
                <Text style={estilo.textUnid}>
                    {item.unidade} 
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
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',

  },

  textDescricao: {
    color:'#666666',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 5,
  },

  text: {
    color:'#666666',
    fontSize: 12,
    marginRight: 20,
  },

  textUnid: {
    fontSize: 12,
    color: '#707070',
  },

  patter:{
      alignItems: "center",
      justifyContent: 'center',
  }
});
