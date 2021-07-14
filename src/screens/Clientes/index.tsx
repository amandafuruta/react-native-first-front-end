import React from "react";
import { View, Text, SectionList, TouchableOpacity , Pressable} from "react-native";
import {GlobalStyles} from "../../../style/globalStyle"

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
      <View style={GlobalStyles.backgroundWhite}>

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
            onPress={valor==true?() => navigation.navigate("Detalhes", { item }) : ()=>navigation.navigate("Nova Venda", {nome:item.nome})}
          >
            <Text style={{ paddingVertical: 10 }}>{item.nome}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <View style={[GlobalStyles.backgroundGrey,{paddingVertical: 10 }]}>
            <Text style={[GlobalStyles.primaryColor, { fontSize: 18, paddingLeft: 30 }]}>
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
