import styled  from "styled-components";
import { 
    ActivityIndicator,
    Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const HomeContainer = styled.View`
    display: flex;
    align-items: center;
    height: ${windowHeight}px;
    width: ${windowWidth}px;
`

export const PassContainer = styled.TouchableOpacity`
    display: flex;
    width: ${windowWidth*0.9}px;
    height: ${200}px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 4px #0000002a;
    margin-top: 30px;
`
export const TopicTitle = styled.Text`
       font-size: 20px;
    font-family: 'Roboto-Bold';
    margin-top: 20;
    margin-left: 20;
    color: #232323;
`
