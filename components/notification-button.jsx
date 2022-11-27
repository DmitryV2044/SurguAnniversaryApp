import { 
    StyleSheet,
    Text, 
    TouchableOpacity,
    Image,
  } from 'react-native';
  import { LinearGradient } from 'expo-linear-gradient';
  
  export default function NotificationButton({onPress, style,}){
  
      return(
          <TouchableOpacity onPress={onPress} style={style}>
             <Image style={styles.image} source={require('../assets/bell.png')}/>
         </TouchableOpacity>
      );
  }
  
  const styles = StyleSheet.create({
    image:{
        height: 60,
        width: 60,
    },
    text: {
          fontSize: 24, 
          color: 'white',
      },
  });