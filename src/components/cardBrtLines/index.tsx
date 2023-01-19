import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { styles } from './styles';

export function Card ( {item} ) {
    return(
        <TouchableOpacity style={styles.TOUCHABLE_CARD}>
            <Text style={styles.TEXT_CARD}>Linha</Text>
            <Text style={styles.TEXT_CARD}>Sentido</Text>
            <Text style={styles.TEXT_CARD}>Distância</Text>
            <Text style={styles.TEXT_CARD}>Estimativa</Text>
        </TouchableOpacity>
    )
};