import React from 'react';
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    background-color: #fff;
    align-items: center;
    justify-content: center;
    flex: 1;
    
` 

export const MainDiv = styled.View`
    width:295px;
    
`
MainDiv.ViewText = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 53px;
`

MainDiv.Text = styled.Text`
    color: #075598;
    font-size:12px;
`
MainDiv.ButtonView = styled.View`
    margin-top: 26px;
    width: 100%;
    justify-content: center;
    align-items: center;
`
MainDiv.ButtonView.Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #F2F3FA;
    height:50px;
    width: 141px;
    border-radius: 5px;
`