import React from 'react';
import { ActivityIndicator, View } from 'react-native';


export function Loading () {
    return (
        <View style={{flex: 1}}>
            <ActivityIndicator size={20} color={'#9316a5'}/>
        </View>
    )
}