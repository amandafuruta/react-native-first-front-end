
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex:1;
` 

export const Scroller = styled.ScrollView`
    flex:1;
` 

export const TopDiv = styled.View`
    height: 150px;
    align-items: center;
    padding-top: 30px; 
` 

TopDiv.Txt = styled.Text`
    font-size: 27px;
    font-weight: bold; 
`
export const DivMiddle = styled.View`
    height: 155px;
    border-top-left-radius: 36px ;
    border-top-right-radius: 36px ;
    margin-top: -35px;
`

DivMiddle.Box=styled.View`
    justify-content: center;
    flex-direction: row;
    margin-top: 17px;
`

DivMiddle.Text = styled.View`
    flex-direction: column;
    justify-content: center;
`
DivMiddle.Text.Subtitle = styled.Text`
    font-size: 12px;
    color:#666666;
`
DivMiddle.Text.Value = styled.View`
    flex-direction: row;
    align-items: center;
`

DivMiddle.Text.Value.Cifrao = styled.Text`
    color: #0CB1CD;
    font-size: 14px;
    margin-right: 5px;
`

export const DivBottom = styled.View`
    border-top-left-radius: 36px ;
    border-top-right-radius: 36px ;
    flex: 1;
    margin-top: -54px;
`

DivBottom.Top = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 34px 30px 66px 17px;
`
DivBottom.Top.Div = styled.View`
    flex-direction: column;
    justify-content: center;
`
DivBottom.Top.Div.Title = styled.Text`   
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 5px;
`
DivBottom.Top.Div.Subtitle = styled.Text`
    color: #666666;
    font-size: 12px;
    font-weight: 500;
    width: 162px;
    text-align: justify;
`
DivBottom.Buttons = styled.View`
    margin: 0 auto;
    flex-direction: row;
`

DivBottom.Buttons.Touch = styled.TouchableOpacity`
    border-radius: 20px;
    width:147px;
    height: 121px;
    padding-left: 20px;
    padding-top: 33px;
`
DivBottom.Buttons.Touch.Text = styled.Text`
    font-size:15px;
`
export const DivMovimentacao = styled.View`
    padding-top: 20px;
`
DivMovimentacao.Title = styled.Text`
    margin-left: 36px;
    margin-bottom: 20px;
    font-size:20px;
    font-weight:bold;
    
`