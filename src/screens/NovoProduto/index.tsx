import React, { useRef } from 'react';
import { Form } from '@unform/mobile';
import { StyleSheet, Text, KeyboardAvoidingView, Platform, View, TouchableOpacity, ScrollView} from 'react-native';
import Input from '../../components/Input';
import {GlobalStyles} from '../../../style/globalStyle'

export default () => {
        const formRef = useRef(null);

        function handleSubmit(data, { reset }) {
            console.log(data);

            reset();
        }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={[styles.container, GlobalStyles.backgroundWhite]}>
        <ScrollView>
            <View>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    
                    <Input name="categoria" label="Categoria" require />

                    <Input name="name" label="Nome" require />

                    <Input name="medida" label="Unidade de medida" require />

                    <Input name="marca" label="Marca" require />                  
                    
                    <Input name="preco" label="Preço" require />
                    
                    <View style={{paddingTop:68}}>
                        <TouchableOpacity style={[styles.submitButton, GlobalStyles.backgroundPrimary, GlobalStyles.button]} onPress={() => formRef.current.submitForm()}>
                            <Text style={[styles.submitButtonText, GlobalStyles.whiteColor]}>Cadastrar Produto</Text>
                        </TouchableOpacity>
                    </View>
                </Form>
            </View>
            
        </ScrollView>
    </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      padding: 30,
    },
  
    submitButton: {
      borderWidth: 0,
      paddingVertical: 17,  
      paddingHorizontal: 85,
    },
  
    submitButtonText: {
      fontWeight: 'bold',
      fontSize: 15,
    },
  });