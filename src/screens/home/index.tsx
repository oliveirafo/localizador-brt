import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, View, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { EmptySearch } from "../../components/listEmptyComponent";
import { Logo } from "../../components/logo";
import { base } from "../../base";
import styles from "./styles";


export default function Home () {
  
  const [list, setList] = useState(base);
  const [searchText, setSearchText] = useState('');
  const { navigate } = useNavigation();
  const alpha = /[^A-Za-z]/g;

  function handleNext (local: navigationProps) {
    navigate( 'station', {local} )
  };

  useEffect(() => {
    if (searchText !== '') {
      setList(
        base.filter(
          (dataItem: navigationProps) => {
            if (dataItem.estacao.toLowerCase().indexOf( searchText.toLowerCase().trim() ) > -1 ) {
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
      setList(base)
    }, [])
  );

  return (
    <SafeAreaView style={styles.SAFE_CONTAINER}>
      
      <View style={styles.VIEW_CONTAINER1}>
        <Logo />
        <View style={styles.VIEW_INPUT}>
          <Text style={styles.TEXT_TITLE}>
            SELECIONE SUA ESTAÇÃO
          </Text>
          <TextInput style={styles.INPUT}
            placeholder="Digite o nome da estação"
            maxLength={20}
            keyboardType='default'
            onChangeText={ char => setSearchText( char.replace(alpha, '') ) }
            value={searchText}
          />
        </View>
      </View>

      <View style={styles.VIEW_CONTAINER2}>
        <FlatList style={styles.FLATLIST}
          showsVerticalScrollIndicator={false}
          initialNumToRender={15}
          ListEmptyComponent={<EmptySearch title='Nenhum resultado encontrado'/>}
          data={list}
          keyExtractor={ (item) => item?.estacao}
          renderItem={ ({item}) => 

            <View style={styles.VIEW_CARD}>
              <TouchableOpacity style={styles.TOUCHABLE_CARD}
                onPress={ () => handleNext(item) } >
                  <Text style={styles.TEXT_TOUCHABLE_CARD}>
                    {item?.estacao}
                  </Text>
              </TouchableOpacity>
            </View>
            
          }
        />
      </View>

    </SafeAreaView>
  );
};
