import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text, 
  SafeAreaView, 
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default function ReturnButton({onPress}){
    return(
        <View style={styles.main}>
            <TouchableOpacity onPress={onPress}>
                <Image source={require("../assets/return-button.png")}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        paddingRight: '10%',
        paddingTop: '5%',
        alignItems: 'flex-end',
       // backgroundColor: '',
    },
    text: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    }
});