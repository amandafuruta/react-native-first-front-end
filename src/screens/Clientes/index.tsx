import React from "react";
import { Container, Section } from "./style";
import { View, Text, SectionList, TouchableOpacity , Pressable} from "react-native";
import { Feather } from '@expo/vector-icons';

  const fakeData = [
    {
      
      nome: "Daniel",
      cnpj: "062.445.322.11",
      responsavel: "062.445.322.11",
      telefone: "(43) 9 9999-5555",
      cidade: "Londrina",
      transacao: [
        {
          data: "12/12/21",
          hora: '19:30',
          code: "202199773",
          valor: "18900,75",
        },
        {
          data: "25/02/12",
          hora: '19:30',
          code: "202199773",
          valor: "10,70",
        },
        {
          data: "22/22/12",
          hora: '19:30',
          code: "202199773",
          valor: "11,00",
        },
      ]
    },
    {
      
      nome: "Amelia",
      cnpj: "062.445.322.11",
      responsavel: "062.445.322.11",
      telefone: "(43) 9 9999-5555",
      cidade: "Londrina",
      transacao: [
        {
          data: "12/12/21",
          hora: '19:30',
          code: "202199773",
          valor: "18900,75",
        },
        {
          data: "25/02/12",
          hora: '19:30',
          code: "202199773",
          valor: "10,70",
        },
        {
          data: "22/22/12",
          hora: '19:30',
          code: "202199773",
          valor: "11,00",
        },
        {
          data: "12/12/21",
          hora: '19:30',
          code: "202199773",
          valor: "18900,75",
        },
        {
          data: "25/02/12",
          hora: '19:30',
          code: "202199773",
          valor: "10,70",
        },
        {
          data: "22/22/12",
          hora: '19:30',
          code: "202199773",
          valor: "11,00",
        },
        {
          data: "12/12/21",
          hora: '19:30',
          code: "202199773",
          valor: "18900,75",
        },
        {
          data: "25/02/12",
          hora: '19:30',
          code: "202199773",
          valor: "10,70",
        },
        {
          data: "22/22/12",
          hora: '19:30',
          code: "202199773",
          valor: "11,00",
        },
      ],
    },
    {
    
      nome: "Ana Paula",
      cnpj: "062.445.322.11",
      responsavel: "062.445.322.11",
      telefone: "(43) 9 9999-5555",
      cidade: "Cambé",
    },
    {
      
      nome: "Andreia",
      cnpj: "062.445.322.11",
      responsavel: "062.445.322.11",
      telefone: "(43) 9 9999-5555",
      cidade: "Londrina",
    },
    {
      
      nome: "Bernardo",
      cnpj: "062.445.322.11",
      responsavel: "062.445.322.11",
      telefone: "(43) 9 9999-5555",
      cidade: "Londrina",
      transacao: [
        {
          data: "12/12/21",
          hora: '19:30',
          code: "202199773",
          valor: "18900,75",
        },
        {
          data: "25/02/12",
          hora: '19:30',
          code: "202199773",
          valor: "10,70",
        },
        {
          data: "22/22/12",
          hora: '19:30',
          code: "202199773",
          valor: "11,00",
        },
      ]
    },
    {
    
      nome: "Bruno",
      cnpj: "062.445.322.11",
      responsavel: "062.445.322.11",
      telefone: "(43) 9 9999-5555",
      cidade: "Londrina",
    },
    {
      
      nome: "Carlos",
      cnpj: "062.445.322.11",
      responsavel: "062.445.322.11",
      telefone: "(43) 9 9999-5555",
      cidade: "Londrina",
    },
    
    {
      
      nome: "Eduardo",
      cnpj: "062.445.322.11",
      responsavel: "062.445.322.11",
      telefone: "(43) 9 9999-5555",
      cidade: "Londrina",
    },
    {
    
      nome: "Elisa",
      cnpj: "062.445.322.11",
      responsavel: "",
      telefone: "(43) 9 9999-5555",
      cidade: "Cambé",
    },
  ];


  const sections: {title:string, data: any[]}[] = [];

  fakeData.map((item)=>{
    const firstLetter = item.nome.substring(0,1).toUpperCase();

    const section = sections.find(section => section.title === firstLetter);

    if(section){
      section.data.push(item)
    }else{
      sections.push({title: firstLetter, data: [item]})
    }
  })

export default ({ navigation , route}) => {
  const valor  = route.params
  return (
    <>
      {/* <View style={{alignSelf: "stretch", backgroundColor:'#F1F1F1', flexDirection:'row', height:80, alignItems: 'center', paddingRight:40, paddingLeft:140, justifyContent: 'space-between'}}>
                  <Text style={{fontSize:18, fontWeight:'700' , color:'#075598'}}>Clientes</Text>
                  <Pressable onPress={()=>{navigation.openDrawer()}}>
                      <Feather name="menu" size={24} color="#075598" style={{marginLeft:50}}/>
                  </Pressable>
                  
              </View> */}
      <View style={{backgroundColor:'#fff'}}>

      <SectionList
        sections={sections.sort((itemA, itemB)=>{
          if (itemA.title < itemB.title) {
            return -1;
          }
          if (itemA.title > itemB.title) {
            return 1;
          }
          
          return 0;
        })}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ paddingLeft: 50}}
            // disabled={valor==true? false: true }
            onPress={valor==true?() => navigation.navigate("Detalhes", { item }) : ()=>navigation.navigate("Nova Venda", {nome:item.nome})} 
            
          >
            <Text style={{ paddingVertical: 10 }}>{item.nome}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: "#f2f2f2", paddingVertical: 10 }}>
            <Text style={{ fontSize: 18, color: "#075598", paddingLeft: 30 }}>
              {section.title}
            </Text>
          </View>
        )}
        keyExtractor={(item,index) => index.toString()}
      />
    </View>
  </>
  );
};
