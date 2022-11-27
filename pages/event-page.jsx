import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button} from 'react-native';
import { globalStyle } from '../styles/style';
import ReturnButton from '../components/return-button';
import NavigationFooter from '../components/nav-footer';
import HeadWithText from '../components/head-with-text';
import React, { useState, useCallback, useRef } from "react";
import YoutubePlayer from "react-native-youtube-iframe";


export default function EventPage({navigation}) {

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
      }
    }, []);
  
    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);

    return (
        <View style={globalStyle.fill}>
            <SafeAreaView style={globalStyle.main_view}>
                <HeadWithText text='Программа мероприятия' onReturn={() => navigation.navigate('Schedule')}/>
                <View>
                    <YoutubePlayer
                        height={250}
                        play={playing}
                        videoId={"Dx5qFachd3A"}
                        onChangeState={onStateChange}
                    />
                </View>
            <Text style={[globalStyle.text_bold, styles.title]}>Описание</Text>
            <Text style={[globalStyle.text, styles.description]}>Ориентировано на внутреннюю среду университета.
В мероприятие вовлекаются студенты и аспиранты.
Конкурс студенческих фотографий на научные тематики проводится в онлайн, итоги подводятся голосованием в онлайн.По итогам конкурса победителям вручаются ценные подарки и дипломы.Организуется экспозиция для демонстрации лучших фоторабот студентов, фотозона</Text>

            </SafeAreaView>
            <NavigationFooter navigation={navigation}/>
        </View>

     
    );
}

const styles = StyleSheet.create({
    title:{
        textAlign: 'center',
        paddingTop: 20,
    },
    description:{
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'center',
    }
});

