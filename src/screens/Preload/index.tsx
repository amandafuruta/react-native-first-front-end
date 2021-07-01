import React, { useEffect } from 'react';
import { Container, Texto, LoadingIcon } from './style';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';


export default () => {

    const navigation = useNavigation();

    useEffect(() =>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token){
                //validar token
            }else{
                navigation.navigate('MainTab')
            }
        }
        checkToken();
    }, [])

    return(
        <Container>
            <Texto>App Lets</Texto>
            <LoadingIcon size="large" color="#075598"/>
        </Container>
    )
}
