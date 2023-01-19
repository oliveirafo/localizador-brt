import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";


const dimensions = Dimensions.get('screen')

export const styles = StyleSheet.create({

    VIEW_CARD: {
        width: dimensions.width - 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    TOUCHABLE_CARD: {
        marginHorizontal: 5,
        height: 60,
        width: 180,
        borderWidth: 1,
        borderColor: '#9316a5',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    TEXT_CARD: {
        fontFamily: 'Montserrat-Regular', 
        fontSize: RFValue(12),
        textAlign: 'center'
    }

})
