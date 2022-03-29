import styled  from "styled-components";
import { 
    ActivityIndicator,
    Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const SettingsContainer = styled.View`
    display: flex;
    height: ${windowHeight}px;
    width: ${windowWidth}px;
`

export const HeadPassContainer = styled.TouchableOpacity`
    display: flex;
    width: ${windowWidth*0.9}px;
    height: ${70}px;
    background-color: #fff;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: 0px 4px 4px #0000002a;
    margin-top: 30px;
    justify-content: center;
    background-color: ${props => props.color ? props.color : "#e0e0e0"};

`

export const PassContainer = styled.TouchableOpacity`
    display: flex;
    width: ${windowWidth*0.9}px;
    height: ${70}px;
    background-color: #fff;
    box-shadow: 0px 4px 4px #0000002a;
    justify-content: center;
    border-top-width: 1;
    border-top-color: #fffa;
    background-color: ${props => props.color ? props.color : "#e0e0e0"};

`
export const BlockTitle = styled.Text`
       font-size: 20px;
    font-family: 'Roboto-Medium';
    margin-left: 20;
    color: ${props => props.color};
`

export const SectionTitle = styled.Text`
       font-size: 15px;
    font-family: 'Roboto-Regular';
    margin-top: 20;
    margin-left: 20;
`

export const Name = styled.Text`
    font-size: 20px;
    margin-top: 15px;
    font-family: 'Roboto-Medium';
    margin-bottom: 10px;
    color:#232323;
`

export const Icon = styled.Image`
width: 100px;
height: 100px;
margin-top: 30px;
border-radius: 10000000000000000000px;
`
export const Header = styled.View`
    width: ${windowWidth}px;
    display: flex;
    align-items: center;
`

export const Section = styled.View`
    width: ${windowWidth}px;
    display: flex;
    align-items: center;
`


export const StatusTitle = styled.Text`
       font-size: 15px;
    font-family: 'Roboto-Regular';
    color: ${props => props.color};
    margin-left: 20;
`
