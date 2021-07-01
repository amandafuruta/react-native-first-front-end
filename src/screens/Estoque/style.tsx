import React from 'react';
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;

` 

export const Header = styled.View`
    width: 100%;
    height: 84px;
    background-color: #F1F1F1;
    align-items: center;
    justify-content: center;
`
Header.Text = styled.Text`
    font-size: 20px;
    color: #075598;
    font-weight: bold;
`

export const TopButtons = styled.TouchableOpacity`
    background-color: #F2f3fA;
    height: 33px;
    justify-content: center;
`
TopButtons.Text = styled.Text`
    font-size: 12px;
    color: #075598;
    font-weight: 700;
`