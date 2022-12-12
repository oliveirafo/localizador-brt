import React from 'react';
import { Image } from 'react-native';


export function LocalStationIcon () {
    return(
        <Image 
            style={{ width: 80, height: 50 }}
            source={{ uri: 'https://media.tenor.com/V994Pis5f7cAAAAj/location-maps.gif'} }
            resizeMode='contain'
        />
    )
};