import React, {useState, useEffect, useCallback} from 'react';
import {Text, View, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';

const produtos = [
  {
    id: 0,
    foto: require('../../assets/produto1.jpg'),
    descricao: 'Apresuntado Sadia',
    preco: '23,90',
    unidade: '10',
  
  },
  {
    id: 1,
    foto: require('../../assets/produto2.jpg'),
    descricao: 'Queijo Mussarela',
    preco: '23,90',
    unidade: '3',
  
  },
  {
    id: 2,
    foto: require('../../assets/produto3.jpg'),
    descricao: 'Mortadela Seara',
    preco: '23,90',
    unidade: '5',
  
  },
  {
    id: 3,
    foto: require('../../assets/produto1.jpg'),
    descricao: 'Apresuntado Sadia',
    preco: '23,90',
    unidade: '0',
  
  },
  {
    id: 4,
    foto: require('../../assets/produto1.jpg'),
    descricao: 'Apresuntado Sadia',
    preco: '23,90',
    unidade: '10',
  
  },
  {
    id: 5,
    foto: require('../../assets/produto2.jpg'),
    descricao: 'Queijo Mussarela',
    preco: '23,90',
    unidade: '3',
  
  },
  {
    id: 6,
    foto: require('../../assets/produto3.jpg'),
    descricao: 'Mortadela Seara',
    preco: '23,90',
    unidade: '5',
  
  },
  {
    id: 7,
    foto: require('../../assets/produto1.jpg'),
    descricao: 'Apresuntado Sadia',
    preco: '23,90',
    unidade: '0',
  
  },
];

interface ICart{
  produtoID: number,
  quantidade: number,
}

export default function (props:any) {
  const ID = props.identificador
  

  const [carrinho, setCarrinho] = useState<ICart[]>([])

  const removerProdutosCarrinho = (id:number) => {
    const product = carrinho.find((elemento)=>{
      return elemento.produtoID === id
    })

    if (product){
      product.quantidade--

      if(product.quantidade <= 0){
        setCarrinho(carrinho.filter((elemento)=>{
          
          return elemento.produtoID != id
          
        }))
      }else{
        setCarrinho([...carrinho])
      }
    }
  }

  const adicionarProdutosCarrinho = (id:number) => {
    const product = carrinho.find((elemento)=>{
      return elemento.produtoID === id
    })

    if (product){
      product.quantidade++
      setCarrinho([...carrinho])
    }else{
      setCarrinho((oldCart)=> [...oldCart, {produtoID:id, quantidade:1}])
    }
  }
  
  useEffect(()=>{
    console.log(carrinho)
  },[carrinho])

  const getProductQuantity = useCallback((id)=>{
    const product = carrinho.find((elemento)=>{
      return elemento.produtoID === id
    })

    if(product){
      return product.quantidade
    }else{
      return 0
    }
  },[carrinho])
 
  

  return (
    <View>
      <FlatList
        
        data={produtos}
        keyExtractor={(item, index) => index.toString()}
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
                        {JSON.stringify(item.descricao)}
                    </Text>

                    <Text style={estilo.text}>
                        R${item.preco}
                    </Text>
                </View>

              <View style={{justifyContent: 'center'}}>

                <Text style={[estilo.textUnid, {display: ID==null? 'flex': 'none'}]}>
                    {item.unidade} 
                </Text>

                <View style={ {display: ID==null? 'none': 'flex', flexDirection:'row'}}>

                    <TouchableOpacity style={[estilo.btnplus, {marginRight:10}]} onPress={()=> removerProdutosCarrinho(item.id) }>
                      <Text style={estilo.txtplus}>-</Text>
                    </TouchableOpacity> 

                    <Text style={estilo.textUnid}> {getProductQuantity(item.id)} </Text>

                    <TouchableOpacity style={[estilo.btnplus, {marginLeft:10}]} onPress={()=> adicionarProdutosCarrinho(item.id)}>
                      <Text style={estilo.txtplus}>+</Text>
                    </TouchableOpacity>

                </View>
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
  },

  btnplus:{
    backgroundColor: '#075598',
    borderRadius:5,
    width: 20,
    alignItems: 'center',
  },

  txtplus:{
    fontSize: 15,
    color: '#fff',
  }

});
