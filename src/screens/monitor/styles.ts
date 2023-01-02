import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const dimensions = Dimensions.get('screen');

const styles = StyleSheet.create({

  SAFE_CONTAINER: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  /* ================== VIEW TITLE ================== */

  VIEW_TITLE: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: RFValue(20),
  },

  VIEW_IMAGE: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: RFValue(10),
  },

  VIEW_INFO_LOCAL: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  TEXT_INFO_STATION: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: RFValue(18)
  },
  
  TEXT_STATION_NAME: {
    fontFamily: 'Montserrat-Bold', 
    fontSize: RFValue(15)
  },

  /*================== VIEW VEHICLES NEARBY ==================*/ 

  VIEW_VEHICLES: {
    flexDirection: 'row',
    margin: 10,
  },

  TEXT_VEHIC_TITLE: {
    fontFamily: 'Montserrat-Regular', 
    fontSize: RFValue(15)
  },

  TEXT_COUNTER: {
    fontFamily: 'Montserrat-Regular', 
    fontSize: RFValue(15),
  },

  /* ================== VIEW FLATLIST ================== */

  VIEW_FLAT_LIST: {
    width: dimensions.width - RFValue(15)
  },

  VIEW_CARD: {
    justifyContent: 'center',
    alignItems: 'center',
    height: dimensions.height / 5, 
    marginHorizontal: 4, 
    marginTop: 20
  },

});

export default styles;
