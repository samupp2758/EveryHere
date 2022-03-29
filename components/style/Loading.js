import styled  from "styled-components";
import { 
    Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const LoadingContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1000000px;
    background-color: #fff;
    position: absolute;
    bottom: 80px;
    box-shadow: 0px 4px 5px #0000001a;
`

const loadingSize = 60
export const LoadingSymbol = styled.ActivityIndicator`
    width: 60px;
    height: 60px;
`



export function Loading (){
    return(
        <LoadingContainer>
            <LoadingSymbol/>
        </LoadingContainer>
    )
}