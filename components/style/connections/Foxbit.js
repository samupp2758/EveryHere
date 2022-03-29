import styled  from "styled-components";
import { 
    ActivityIndicator,
    Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
    height: ${windowHeight}px;
    width: ${windowWidth}px;
`
export const InfoTitle = styled.Text`
       font-size: 20px;
    font-family: 'Roboto-Bold';
    text-align: left;
`
export const InfoValue = styled.Text`
    font-size: 15px;
    text-align: left;
    font-family: 'Roboto-Regular';
    color:#232323aa;
`

export const InfoContainer = styled.View`
    width: ${windowWidth}px;
    margin-left: 20px;
    margin-top: 20px;
`



export const ButtonContainer = styled.View`
width: ${windowWidth}px;
display: flex;
`

export const ButtonTitle = styled.Text`
     color: ${props => props.color ? props.color : "#fffa"};
     padding: 20px;
     padding-top: 15px;
     padding-bottom: 15px;
`

export const ButtonHitBox = styled.TouchableOpacity`
    background-color: ${props => props.bg ? props.bg : "#003fe2"};
    box-shadow: 0px 4px 4px #0000002a;
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 20px;
    width: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
`