import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated';

export default (props) => {
    return(
       
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.txt}>{props.nome}</Text>
        </TouchableOpacity>
      
    )
}

const styles = StyleSheet.create({

    btn:{
        backgroundColor: '#075598', 
        height: 50, 
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 90,
        paddingRight:90,
        position: 'absolute',
        bottom: 20,
        right: 30,
    },
    
    txt:{
        fontSize: 12,
        fontWeight: '700',
        color: '#fff',
    }
})