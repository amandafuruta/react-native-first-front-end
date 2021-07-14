import React from 'react';
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;  
` 

export const TopButtons = styled.TouchableOpacity`
    background-color: #F2f3fA;
    height: 33px;
    justify-content: center;
`
TopButtons.Text = styled.Text`
    font-size: 12px;
    font-weight: 700;
`