
import { useFonts } from "expo-font";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


const styles = StyleSheet.create({
    CONTAINER: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    IMG: {
        width: RFValue(100),
        height: RFValue(100),
        margin: 20,
    },

    TEXT_RESULT: {
        fontSize: RFValue(18), 
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular'
    }
})

export function EmptySearch ({title}) {
    const [fonts] = useFonts({
        'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf')
    })
    return (
        <View style={styles.CONTAINER}>
            <Image 
                style={styles.IMG}
                source={require('../../assets/images/emptyCompont/sad_component.gif')}
            />
            <Text style={styles.TEXT_RESULT}>
                {title}
            </Text>
        </View>
    )
};

export function Construct ({title}) {
    const [fonts] = useFonts({
        'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf')
    })
    return (
        <View style={styles.CONTAINER}>
            <Image 
                style={styles.IMG}
                source={require('../../assets/images/emptyCompont/construct.gif')}
            />
            <Text style={styles.TEXT_RESULT}>
                {title}
            </Text>
        </View>
    )
};


