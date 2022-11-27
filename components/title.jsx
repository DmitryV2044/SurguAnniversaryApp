import { 
  StyleSheet,
  Text, 
  View,
} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';



export default function GradientText({text, fontSizeSet, location1, location2}){

    return(
        <View style={styles.main}>
            <MaskedView
                style={{ flex: 1 }}
                maskElement={(
                <View
                    style={{flex: 1}}>
                    <Text
                        style={{
                            flex: 1,
                            fontSize: fontSizeSet,
                            color: 'black',
                            fontWeight: 'bold',
                        }}>
                        {text}
                    </Text>
                </View> )}>
                    <LinearGradient
                        style={{flex: 1}}
                        start={{x: 0.5, y: 0}}
                        end={{x: 0.5, y: 1}}
                        locations={[location1, location2]}
                        colors={['#F55FFF', '#0177FF']}
                        pointerEvents='none'
                    />
            </MaskedView>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
       flex:1,
    },

});

