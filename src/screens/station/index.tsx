import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { LocalStationIcon } from '../../components/icons';
import { Loading } from '../../components/loading';
import { get_data } from '../../services/getData';
import { Construct, EmptySearch } from '../../components/listEmptyComponent';


export default function Station ({route}) {
  
  const params: navigationProps = route.params?.local /* === DADOS OBTIDOS DA PAGINA PRINCIPAL ===*/
  const [lenList, setLenList] = useState(0);
  const [list, setList] = useState([]);
  const [lines, setLines] = useState([])
  const emptyListTitle = 'Em breve serão exibidas as informações de localização dos próximos veículos'
  
  useEffect(() => {
    function getLines () {
      const array = params?.linhas
      setLines( array.map( (id) => Object.assign({},{id}) ));
    };

    getLines();
    //get_data(setList, setLenList)
  }, []);


  return (
    <SafeAreaView style={styles.SAFE_CONTAINER}>
      
      <View style={styles.VIEW_CONTAINER_TITLE} /*====== VIEW CONTAINER TITLE ======*/ >
        <View style={styles.VIEW_TITLE}  > 
          <View style={styles.VIEW_IMAGE}>
            <LocalStationIcon />
          </View>
          <View style={styles.VIEW_INFO_LOCAL}>
            <Text style={styles.TEXT_TITLE_STATION_INFO}> 
              Você está em 
            </Text>
          </View>
        </View>
        <View style={styles.VIEW_STATION_CARD}>
          <Text style={styles.TEXT_STATION_CARD}>
            {params?.estacao}
          </Text> 
        </View>
      </View>


      <View style={styles.VIEW_FUNC} /*====== VIEW VEHICLES NEARBY ======*/  >
        <View style={{marginRight: 10}}>
          <Text style={styles.TEXT_HOUR}>
            Horário de Funcionamento:
          </Text>
        </View>
        <View>
          <Text style={styles.TEXT_FUNC}>
            { params?.Funcionamento } 
          </Text>
        </View>
      </View>

      <View style={styles.VIEW_VEHICLES} /*====== VIEW VEHICLES NEARBY ======*/  >
        <View style={{marginRight: 10}}>
          <Text style={styles.TEXT_VEHIC_TITLE}>
            Linhas que atendem:
          </Text>
        </View>
        <View>
          <Text style={styles.TEXT_COUNTER}>
            { params?.linhas?.length }
          </Text>
        </View>
      </View>

    <View style={styles.VIEW_LINES}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        initialNumToRender={3}
        horizontal
        data={lines}
        keyExtractor={item => item?.id}
        renderItem={({item}) => 

          <TouchableOpacity style={styles.TOUCHABLE_LINES_CARD}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginHorizontal: 20}}>
              <Image 
                style={{width: 40, height: 40, borderRadius: 20}}
                source={require('../../assets/images/horizontalCard/brt-card.png')}
              />
              <Text style={styles.TEXT_LINES_STYLE}>
                {item?.id}
              </Text> 
            </View>
          </TouchableOpacity>
          
        }
      />
    </View>

    <View style={styles.VIEW_FLAT_LIST}>
        <FlatList 
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<Construct title={emptyListTitle} />}
          initialNumToRender={10}
          data={[]}
          keyExtractor={ item => item?.vei_nro_gestor  }
          renderItem={({item}) => 
        
            /* ========== CARD ========== */
            <View style={styles.VIEW_CARD}>
              <TouchableOpacity style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#9332b1', borderRadius: 20}}>
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
