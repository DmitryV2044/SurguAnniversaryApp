import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text, 
  SafeAreaView, 
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default function HeaderHome(){
    const goBack = () => {
        console.log('trying to move backwards');
    }

    return(
        <View style={styles.main}>
            <TouchableOpacity onPress={goBack}>
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
        height: 100,
       // backgroundColor: '',
    },
    text: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    }
});