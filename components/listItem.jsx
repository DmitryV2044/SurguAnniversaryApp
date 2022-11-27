import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text, 
  TouchableHighlight,
} from 'react-native';

export default function ListItem({element}){
    return(
        <TouchableHighlight>
            <Text style={styles.text}>{element.text}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: 'center',
        borderRadius: 5,
        backgroundColor: '#F9D6FF',
        borderWidth: 2, 
        borderColor: '#C4BFFF',
        marginTop: 10, 
        width: '80%',
        marginLeft: '10%'
    }
});
