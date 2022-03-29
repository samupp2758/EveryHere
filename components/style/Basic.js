import styled  from "styled-components";
import AntDesign from 'react-native-vector-icons/AntDesign';

import { 
    ActivityIndicator,
    Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${windowHeight}px;
    width: ${windowWidth}px;
`

export const ReloadView = styled.ScrollView`

width: ${windowWidth}px;
`


export const BlueTitle = styled.Text`
    font-size: 30px;
    color: #003fe2;
    font-family: 'Roboto-Medium';
`

export const Title = styled.Text`
    font-size: 30px;
    color: #232323;
    font-family: 'Roboto-Regular';
`

export const BoldTitle = styled.Text`
    font-size: 30px;
    color: #232323;
    font-family: 'Roboto-Medium';
`