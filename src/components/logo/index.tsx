
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


const styles = StyleSheet.create({
    CONTAINER: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    IMG: {
        width: RFValue(150),
        height: RFValue(70),
        borderRadius: 50

    }
})

export function Logo () {
    return (
        <View style={styles.CONTAINER}>
            <Image 
                style={styles.IMG}
                source={require('../../assets/images/logo/BRT_LOGO2.png')}
            />
        </View>
    )
};

