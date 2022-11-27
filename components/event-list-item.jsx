import React from 'react';
import { StyleSheet, Text, View,  Image, TouchableWithoutFeedback} from 'react-native';
import { globalStyle } from '../styles/style';

export default function EventListItem({item}) {
    return (
        <View style={styles.item}>
            <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
            <TouchableWithoutFeedback onPress={() => console.log('moving to event')}>
            <Image
                source={{
                uri: item.uri,
                }}
                style={styles.itemPhoto}
                resizeMode="cover" />
            </TouchableWithoutFeedback>
            <Text style={[globalStyle.text_bold, styles.theme]}>Тема</Text>
         </View>
          <Text style={styles.itemText}>{item.text}</Text>
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
        boerderColor: 'red',
        height: 320,
        width: 390,
    },
    itemPhoto: {
        width: 150,
        height: 250,
        color: '#f4f4f4',
        marginTop: 10,
        marginBottom: 5,
        borderRadius: 20,
        marginRight: 30,
        marginLeft: 20,
    },
    itemText: {
        color: 'rgba(255, 255, 255, 0.5)',
        marginTop: 5,
    },
    theme:{
        paddingLeft: 40,
        textAlign: 'center',
        fontSize: 30,
    }
});
