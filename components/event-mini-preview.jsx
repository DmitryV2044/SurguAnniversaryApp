import { 
    StyleSheet,
    Text, 
    Image,
    View,
    ImageBackground,
    TouchableOpacity
  } from 'react-native';
import { globalStyle } from '../styles/style';
  
  export default function EventMiniPreview({onPress, text, style, source, imageStyle}){
  
      return(
        <View style={style}>
          <Text style={globalStyle.text_bold}>{text}</Text>
          <View style={styles.preview}>
            <TouchableOpacity onPress={onPress}>
                <ImageBackground imageStyle={[styles.image, imageStyle]} source={source} >
                    <Image style={styles.playbutton} source={require('../assets/playbutton.png')}/>
                </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>

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
      image: { 
        height: 300,
        width: 170,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#616161',
        color: 'black',
       
      },
      preview:{
        height: 300,
      },
      text: {
          fontSize: 20, 
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'open-sans-bold',
      },
      playbutton: {
        marginTop: 10,
        marginLeft: 10,
      }
  });