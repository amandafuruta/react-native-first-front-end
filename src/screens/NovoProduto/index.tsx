import React, { useRef } from 'react';
import { Form } from '@unform/mobile';
import { StyleSheet, Text, KeyboardAvoidingView, Platform, View, TouchableOpacity, ScrollView} from 'react-native';
import Input from '../../components/Input';

export default () => {
        const formRef = useRef(null);

        function handleSubmit(data, { reset }) {
            console.log(data);

            reset();
        }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.container}>
        <ScrollView>
            <View>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    
                    <Input name="categoria" label="Categoria" require />

                    <Input name="name" label="Nome" require />

                    <Input name="medida" label="Unidade de medida" require />

                    <Input name="marca" label="Marca" require />                  
                    
                    <Input name="preco" label="Preço" require />
                    
                    <View style={{paddingTop:68}}>
                        <TouchableOpacity style={styles.submitButton} onPress={() => formRef.current.submitForm()}>
                            <Text style={styles.submitButtonText}>Cadastrar Produto</Text>
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
      backgroundColor: '#fff',
    },
  
    submitButton: {
      backgroundColor: '#075598',
      borderWidth: 0,
      borderRadius: 5,
      paddingVertical: 17,  
      paddingHorizontal: 85,
      alignItems: 'center'
    },
  
    submitButtonText: {
      fontWeight: 'bold',
      color: '#fff',
      fontSize: 15,
      
    },
  });