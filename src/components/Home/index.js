import React, { Component } from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'

import MentoringTab from '../../assets/MentoriasTab.png';
import CalendarTab from '../../assets/CalendarTab.png'

const Home = ({ navigation }) => (
    <View
        style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}
    >
        <TouchableOpacity style={styles.mentoringtabbutton} onPress={() => navigation.navigate('Mentorias') } >
            <Image 
                style={styles.calendartab}
                source={MentoringTab} 
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.calendartabbutton} onPress={() => navigation.navigate('Calendario') }>
            <Image 
                style={styles.calendartab}
                source={CalendarTab}
            />
        </TouchableOpacity>
    </View>
);

Home.navigationOptions = {
    title: 'Alpha App',
}

export default Home;

const styles = StyleSheet.create({
    mentoringtabbutton: {
        width: "100%",
        marginTop: "1.5%",
        alignItems: "center"
    },
    calendartabbutton: {
        width: "100%",
        marginTop: "1.5%",
        alignItems: "center"
    },
    mentoringtab: {
        width: "95%",
        marginTop: "1.5%",
        borderRadius: 8
    },
    calendartab: {
        width: "95%",
        marginTop: "1.5%",
        borderRadius: 8
    }
  });
