import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import { LocalStationIcon } from '../../components/icons';
import { Loading } from '../../components/loading';
import { get_data } from '../../services/getData';
import { EmptySearch } from '../../components/listEmptyComponent';


type routeProps = {
  latitude: number
  longitude: number
  estacao: string
  linhas: string[]
};

export default function Monitor ({route}) {
  
  const params: routeProps = route.params?.local /* === DADOS OBTIDOS DA PAGINA PRINCIPAL ===*/
  const [lenList, setLenList] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    //get_json_data_rio(setList, setLenList);
  }, []);


  return (
    <SafeAreaView style={styles.SAFE_CONTAINER}>
      
      <View style={styles.VIEW_TITLE} /*====== VIEW TITLE ======*/ > 
        <View style={styles.VIEW_IMAGE}>
          <LocalStationIcon />
        </View>
        <View style={styles.VIEW_INFO_LOCAL}>
          <Text style={styles.TEXT_INFO_STATION}> 
            Você está na estação 
          </Text>
          <Text style={styles.TEXT_STATION_NAME}>
           {params?.estacao}
          </Text>
        </View>
      </View>

      <View style={styles.VIEW_VEHICLES} /*====== VIEW VEHICLES NEARBY ======*/  >
        <View style={{marginRight: 10}}>
          { 
            lenList === 0
            ? <Text style={styles.TEXT_VEHIC_TITLE}>
                Procurando veículos próximos 
              </Text> 
            : <Text style={styles.TEXT_VEHIC_TITLE}>
                Veículos encontrados 
              </Text>
          }
        </View>
        <View>
          <Text style={styles.TEXT_COUNTER}>
            { lenList === 0 ? <Loading /> : lenList }
          </Text>
        </View>
      </View>

      <View style={styles.VIEW_FLAT_LIST}>
        <FlatList 
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptySearch title='Nenhum resultado encontrado' />}
          initialNumToRender={10}
          data={list}
          keyExtractor={ item => item?.vei_nro_gestor  }
          renderItem={({item}) => 
        
            /* ========== CARD ========== */
            <View style={styles.VIEW_CARD}>
              <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#9332b1', borderRadius: 20}}>
                <Text style={{color: '#fff'}}>
                  {item?.vei_nro_gestor}
                </Text>
              </TouchableOpacity> 
            </View>
          }
        
        />
      </View>
        
    </SafeAreaView>
  );
};
