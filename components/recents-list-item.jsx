import React from 'react';
import { StyleSheet, Text, View,  Image} from 'react-native';
import { globalStyle } from '../styles/style';

export default function RecentsListItem({item}) {
    return (
        <View style={styles.item}>
          <Image
            source={{
              uri: item.uri,
            }}
            style={styles.itemPhoto}
            resizeMode="cover"
          />
          {/* <Text style={globalStyle.text}>{item.text}</Text> */}

        </View>
      );
}

const styles = StyleSheet.create({
    itemPhoto:{
        width: 115,
        height: 240,
        borderRadius: 20,
        marginRight: 30,
    }
});
