import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, View, Text, TextInput, FlatList, Pressable, TouchableOpacity } from "react-native";
import styles from "./styles";
import local from "../../base/local";
import { Button } from "../../components/button";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";


export default function Home () {
  
  const data = local
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(data);
  const navigation = useNavigation();
  const alpha = /[^A-Za-z]/g;

  function handleNext (lat: number, long: number, name: string) {
    navigation.navigate( 
      'monitor', 
      { start: lat, end: long, station: name }
    )
  }

  useEffect(() => {
    if (searchText === '') {
      setList(data)
    } else {
      setList(
        data.filter(
          (dataItem) => {
            if (dataItem.name.toLowerCase().indexOf( searchText.toLowerCase().trim() ) > -1 ) {
              return true
            }
          }
        )
      )
    }
  }, [searchText])

  useFocusEffect(
    useCallback(() => {
      setSearchText('')
    }, [])
  )

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.container1}>
        <View style={styles.viewInput}>
          <Text style={styles.title}>
            SELECIONE SUA ESTAÇÃO
          </Text>
          <TextInput style={styles.input}
            placeholder="Digite o nome da estação"
            maxLength={20}
            keyboardType='default'
            onChangeText={ char => setSearchText( char.replace(alpha, '') ) }
            value={searchText}
          />
        </View>
      </View>

      <View style={styles.container2}>
        <FlatList style={styles.flatList}
          ListEmptyComponent={
            <Text style={{fontSize: RFValue(20), textAlign: 'center'}}>
              Nada encontrado...
            </Text>
          }
          data={list}
          keyExtractor={ (item) => item.name}
          renderItem={ ({item}) => 

            <View style={styles.renderViewFlatList}>
              <TouchableOpacity 
                style={styles.touchable}
                onPress={ () => handleNext( item.start, item.end, item.name ) }
                >
                  <Text style={styles.text}>
                    {item.name}
                  </Text>
              </TouchableOpacity>

            </View>
            
          }
        />
      </View>

    </SafeAreaView>
  );
};
