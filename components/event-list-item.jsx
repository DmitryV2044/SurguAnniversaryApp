import React from 'react';
import { StyleSheet, Text, View,  Image, TouchableWithoutFeedback} from 'react-native';
import { globalStyle } from '../styles/style';
import { useNavigation } from '@react-navigation/native';

export default function EventListItem({item}) {
    const navigation = useNavigation(); 

    return (
        <View style={[styles.item,]}>
            <View style={{flexWrap: 'wrap', flexDirection: 'row', height: 270}}>
            <TouchableWithoutFeedback style={{flexBasis: '45%',}} onPress={() => navigation.navigate('EventPage')}>
                    <Image
                        source={{
                        uri: item.uri,
                        }}
                        style={styles.itemPhoto}
                        resizeMode="cover" />
                    </TouchableWithoutFeedback>
                <View style={{flexBasis: '55%'}}>
                    <Text style={[globalStyle.text, styles.theme]}>{item.text}</Text>
                    <Text style={[globalStyle.text, styles.type]}>{item.type}</Text>
                    <Text style={[globalStyle.text, styles.description]}>{item.description}</Text>
            </View>
         </View>
         <Text style={[globalStyle.text, styles.date]}>{item.when}</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    sectionHeader: {
        fontWeight: '800',
        fontSize: 18,
        color: '#f4f4f4',
        marginTop: 20,
        marginBottom: 5,
      },
    item: {
        margin: 10,
        borderRadius: 3,
        borderColor: '#616161',
        borderRadius: 30,
        borderWidth: 2,
        height: 320,
        width: 390,
    },
    itemPhoto: {
        width: 150,
        height: 250,
        color: '#f4f4f4',
        marginTop: 20,
        marginBottom: 5,
        borderRadius: 20,
       // marginRight: 30,
        marginLeft: 20,
    },
    itemText: {
        color: 'rgba(255, 255, 255, 0.5)',
        //marginTop: 5,
    },
    theme:{
        paddingLeft: 0,
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 20,
    },
    type:{
        color: '#C7C7C7',
        fontSize: 15,
        textAlign: 'center'
    },
    date: {
        paddingRight: -0,
        marginLeft: 30,
        textAlign: 'left',
        paddingTop: 10,
        fontSize: 20,
    },
    description: {
        fontSize: 16,
        textAlign: 'left',
        paddingLeft: 15,
        paddingTop: 15,
    }
});
