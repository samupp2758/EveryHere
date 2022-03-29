import styled  from "styled-components";
import { 
    Alert,
    Dimensions
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const windowWidth = Dimensions.get('window').width;
const windowHeight = "60";



 function TopBar (props){

    const View = styled.View`
    display: flex;
    width: ${windowWidth}px;
    justify-content: center;
    align-items: center;

`

const Container = styled.View`
    display: flex;
    width: ${windowWidth}px;
    height: ${windowHeight}px;
    background-color: #fffa;
    justify-content: center;
    align-items: center;
`


const Title = styled.Text`
    color:#232323;
    font-size: 20px;
    font-family: 'Roboto-Medium';
`



const GoBack = styled(AntDesign)`
    margin-left:20;
    font-size: 25;
`


const GoBackButton = styled.TouchableOpacity`
    height: ${70}px;
    width: ${windowWidth*0.2}px;
    position: absolute;
    justify-content: center;
    display: flex;
    left:0;
    top:0;
`



    return(
        <View>
          { props.justBack == false ?  
          
            <Container bg={"#fffa"}>
                <GoBackButton onPress={()=>props.navigation.goBack()} >
                    <GoBack color={"#232323"} name="left"/>
                </GoBackButton>
                <Title>{props.who}</Title>
            </Container>
            
            : 
            
            <GoBackButton onPress={()=>props.navigation.goBack()} >
                    <GoBack color={"#232323"} name="left"/>
            </GoBackButton>}
        </View>

    )
} 

export default TopBar


