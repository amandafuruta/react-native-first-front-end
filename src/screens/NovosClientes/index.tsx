import React, { useRef } from 'react';
import { Form } from '@unform/mobile';
import { 
  StyleSheet, 
  Text, 
  KeyboardAvoidingView, 
  Platform, 
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Input from '../../components/Input';

import InputMask from '../../components/InputMask'


export default function App() {
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
                    
                    <Input name="name" label="Nome / Razão Social" require />

                    <InputMask type="cnpj" name="cnpj" keyboardType="numeric" label="CNPJ" require/>
                    
                    <Input name="responsavel" label="Responsável" require />

                    <InputMask type="cel-phone" name="telefone" keyboardType="numeric" label="Telefone" require/>

                    <Input name="cidade" label="Cidade" require />

                    <View style={{paddingTop: 23, paddingBottom:28, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize:12, color:"#075598"}}>Inserir dados completo</Text>
                    </View>

                    <TouchableOpacity style={styles.submitButton} onPress={() => formRef.current.submitForm()}>
                        <Text style={styles.submitButtonText}>Cadastrar Cliente</Text>
                    </TouchableOpacity>
                </Form>
            </View>

            
        </ScrollView>
    </KeyboardAvoidingView>
  );
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