import React, {useEffect, useState, forEach} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, SectionList, FlatList} from 'react-native';
import { globalStyle } from '../styles/style';
import ReturnButton from '../components/return-button';
import GetProfileImage from '../components/api-requests';
import { GetProfileName } from '../components/api-requests';
import EventListItem from '../components/event-list-item';
import NotificationButton from '../components/notification-button';
import NavigationFooter from '../components/nav-footer';


export default function EventsSchedulePage({navigation}) {

    const [listOfItems, setListOfItems] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('fetched: ' + getEventsFromApi().toString())
            
            let events = getEventsFromApi();
            // events.forEach(element => {   
            //     setListOfItems.apply(element)
            // });
        });
    
        return unsubscribe;
      }, [navigation]);

    async function getEventsFromApi() {
        try {
          let response = await fetch('http://localhost:8888/request-events.php');
          let responseJson = await response.json();
          console.log('response: ' + responseJson[0].eventname);
          return responseJson;
         } catch(error) {
          console.error(error);
        }
      }

      const SECTIONS = [
        {
          title: 'Февраль',
          horizontal: false,
          data: [
            {
              key: '1',
              text: ' \«Лопни лженауку\»',
              type: 'Научный челлендж',
              when: 'В течении Февраля',
              description: 'В мероприятие вовлекаются студенты, аспиранты, преподаватели и администрация ВУЗа',
              uri: 'https://picsum.photos/id/1/200',
            },
            {
              key: '2',
              text: 'Item text 2',
              type: 'Научный челлендж',
              when: '10.02',
              description: 'Описание события',
              uri: 'https://picsum.photos/id/10/200',
            },].concat(listOfItems)
        },
        {
            title: 'Март',
            horizontal: false,
            data: [
              {
                key: '1',
                text: 'Item text 1',
                uri: 'https://picsum.photos/id/1/200',
              },
              {
                key: '2',
                text: 'Item text 2',
                uri: 'https://picsum.photos/id/10/200',
              },]
          },
    ];

    return (
     <View style={globalStyle.fill}>
      <SafeAreaView style={globalStyle.main_view}>
        <View style={styles.header}>
            <Image style={{marginRight: 20, marginTop: 5, marginLeft: 20}} source={require('../assets/news.png')}/>
            <Text style={[globalStyle.text_bold, {fontSize: 22, paddingTop: 10, marginRight: 55}]}>Расписание</Text>
            <NotificationButton style={{marginRight: 20,}}/>
            <Image style={{marginTop: 5}} source={require('../assets/search.png')}/>

        </View>
         <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <EventListItem item={item}/>}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <EventListItem item={item} />;
          }}
        />
      </SafeAreaView>
      <NavigationFooter navigation={navigation}/>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
      },
    sectionHeader: {
        fontWeight: '800',
        fontSize: 32,
        color: '#f4f4f4',
        marginTop: 20,
        marginBottom: 5,
        marginLeft: 10
      },
    header: {
        flexWrap: 'wrap', 
        flexDirection: 'row', 
        width: '100%',
    }
});



const style = StyleSheet.create({
    
})