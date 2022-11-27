import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
    main: {
        flex: 1, 
        backgroundColor: '#999',
        padding: 20,
    },
    main_view:{
        backgroundColor: '#141414',
        flex: 1, 

    },
    fill: {
        flex: 1
    },
    title: {
        fontWeight: '700',
        fontFamily: 'open-sans-bold',
        fontSize: 34,
        color: '#0177FF'
    },
    text: {
        fontFamily: 'open-sans-r',
        fontSize: 20,
        color: 'white'
    },
    subtitle: {
        fontWeight: '350',
        fontFamily: 'open-sans-r',
        fontSize: 22,
        color: '#0177FF'
    },  
    input: {
        backgroundColor: '#F0F0F0',
        borderRadius: 14,
        width: 370,
        height: 60,
        borderWidth: 1,
        paddingLeft: 15,
    },
    text_bold: {
        fontSize: 20, 
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'open-sans-bold',
    },
    text_nickname: {
        fontSize: 24, 
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'open-sans-bold',
    }
})