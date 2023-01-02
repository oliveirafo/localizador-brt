import React from 'react';
import { TouchableOpacity, Dimensions, Text, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


export function Button (props: any) {
    return (
        <TouchableOpacity style={styles.touchable}>
            <Text style={styles.text}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
  touchable: {
    width: Dimensions.get('screen').width - 35,
    height: RFValue(40),
    borderRadius: RFValue(10),
    backgroundColor: '#a040d5' ,
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: RFValue(20),
    color: '#fff',
  }
});

