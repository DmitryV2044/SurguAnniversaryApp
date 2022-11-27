import { 
  StyleSheet,
  Text, 
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function MainButton({onPress, text, style, textStyle}){

    return(
        <TouchableOpacity onPress={onPress} >
            <LinearGradient
              colors={['#0177FF', '#F55FFF']}
              locations={[0.4, 1]}
              style={[styles.button ,style]}>
              <Text style={[styles.text, textStyle]}>{text}</Text>
            </LinearGradient>
          </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        marginLeft: '10%',
        marginRight: '10%',
        borderRadius: 14,
    },
    text: {
        fontSize: 24, 
        color: 'white',
    },
});