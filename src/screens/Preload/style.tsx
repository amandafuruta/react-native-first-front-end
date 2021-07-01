import React from 'react';
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    background-color: #fff;
    align-items: center;
    justify-content: center;
    flex: 1;
` 
export const Texto = styled.Text`
    color: #075598;
    font-size: 38px;
    font-weight: bold;
`

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`