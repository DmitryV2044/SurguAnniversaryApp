import ReturnButton from '../components/return-button';
import GetProfileImage from '../components/api-requests';
import { GetProfileName } from '../components/api-requests';
import {View, Text, StyleSheet} from 'react-native';
import { globalStyle } from '../styles/style';


export default function HeadWithText({navigation, text, onReturn}) {
    return (
        <View style={styles.header_view} >  
            <Text style={[globalStyle.text_bold, styles.header_title]}>{text}</Text>
            <ReturnButton style={styles.return} onPress={onReturn}/>
        </View>
)};

const styles = StyleSheet.create({
  return: {
        marginLeft: 0,
        flexBasis: '10%'
  },
  header_view: {
    flexWrap: 'wrap', 
    flexDirection: 'row', 
    width: '100%',
    height: 100,
  },
  header_title: {
    fontSize: 20,
    paddingTop: 30,
    paddingLeft: 0,
    flexBasis: '72%',
    marginLeft: 20,
  },
});