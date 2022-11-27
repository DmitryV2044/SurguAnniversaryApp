import { 
    StyleSheet,
    Text, 
    TouchableOpacity,
    Image,
  } from 'react-native';

export default function ImageButton({onPress, style, imageStyle, source}){
      return(
          <TouchableOpacity onPress={onPress} style={style}>
             <Image source={source} style={imageStyle}/>
         </TouchableOpacity>
      );
  }
  
  const styles = StyleSheet.create({
  });