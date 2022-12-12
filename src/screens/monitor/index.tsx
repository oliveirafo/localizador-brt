import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import { LocalStationIcon } from '../../components/icons';

export default function Monitor ({route}) {

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.viewTitle}>
        <View style={styles.viewImage}>
          <LocalStationIcon />
        </View>
        <View style={styles.viewInfoLocal}>
          <Text style={styles.textInfo}> Você está em </Text>
          <Text style={styles.textInfo}> { route.params?.station } </Text>
        </View>  
      </View>
        
    </SafeAreaView>
  );
};
