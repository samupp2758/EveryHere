import styled  from "styled-components";
import Entypo from 'react-native-vector-icons/Entypo';
import { 
    Alert,
    Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = "60";

const View = styled.View`
    display: flex;
    width: ${windowWidth}px;
    justify-content: center;
    align-items: center;
`

const Container = styled.View`
    display: flex;
    width: ${windowWidth*0.9}px;
    height: ${windowHeight}px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 4px #0000002a;
    margin-top: 10px;
    justify-content: center;
`

const IconButton = styled.TouchableOpacity`
    height:40px;
    margin-left:10px;
`


const Icon = styled.Image`
width: 40px;
height: 40px;
border-radius: 10000000000000000000px;
`



const Search = styled.View`

`

const Type = styled.TextInput`
`

export function TopBar (props){


    _drawer = () => {
        props.navigation.toggleDrawer()
    }
    

    return(
        <View>
            <Container>
                <IconButton onPress={_drawer}><Icon source={props.userInfo.picture == undefined ? require("../../assets/images/user.jpg") : {url:props.userInfo.picture}}/></IconButton>
            </Container>
        </View>

    )
} 

//                <Search><Type/></Search>
