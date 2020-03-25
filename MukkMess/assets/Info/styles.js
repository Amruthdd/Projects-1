import { StyleSheet, Dimensions } from 'react-native'
const logo_color = '#000000'; //#30FFFF
const dimensions = Dimensions.get('window');
const imageHeight = dimensions.height;  //imageHeight = 684.7
const imageWidth = dimensions.width;    //imageWidth = 411.6

export default StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#101010'
    },
    linearGradient: {
        flex: 1,
    },
    titleText: {
        color: 'white', 
        fontSize: 30, 
        fontFamily: 'Montserrat-Bold'
    },
    text: {
        color: '#D0D0D0', 
        fontSize: 14.8,
        fontFamily: 'Montserrat-Medium' 
    },
    eventText: {
        fontSize: 15, 
        color: '#E0E0E0', 
        fontFamily: 'Montserrat-Bold'
    }
})