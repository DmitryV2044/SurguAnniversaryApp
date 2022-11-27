import { 
    StyleSheet,
    Text, 
    Image,
    View,
    ImageBackground,
    TouchableOpacity
  } from 'react-native';
import { globalStyle } from '../styles/style';
  
  export default function EventMiniPreview({onPress, text, style, source}){
  
    function getSource(){
        return 'https://lh3.googleusercontent.com/p68bvAqPWmKFyWYIghthNPoJLAG-1-JJ-B3ZXTrEhHAcCyQrrHx9goYwG_VJGjwVf8Tlh4WLo7-478128wix8gGQOI22v5c3iYi4iqokGrS9IDy7yzjJ34QkMZYU3dr_y3sG6FN5=w2400'
    }

      return(
        <View style={style}>
          <Text style={globalStyle.text_bold}>{text}</Text>
          <View style={styles.preview}>
            <TouchableOpacity onPress={onPress}>
                <ImageBackground imageStyle={styles.image} source={{uri: getSource()}} >
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
        borderColor: 'red',
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