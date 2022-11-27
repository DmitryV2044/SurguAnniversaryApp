import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, SectionList, FlatList} from 'react-native';
import { globalStyle } from '../styles/style';
import ReturnButton from '../components/return-button';
import GetProfileImage from '../components/api-requests';
import { GetProfileName } from '../components/api-requests';
import EventListItem from '../components/event-list-item';
import NotificationButton from '../components/notification-button';
import NavigationFooter from '../components/nav-footer';


export default function EventsSchedulePage({navigation}) {
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
                  renderItem={({ item }) => <EventListItem item={item} />}
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
        <Text style={globalStyle.text}>schedule page</Text>
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

const SECTIONS = [
    {
      title: 'Январь',
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
    {
        title: 'Февраль',
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

const style = StyleSheet.create({
    
})