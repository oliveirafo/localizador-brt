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

  VIEW_CONTAINER_TITLE: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  VIEW_TITLE: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  VIEW_IMAGE: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  VIEW_INFO_LOCAL: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20
  },

  TEXT_TITLE_STATION_INFO: {
    textAlign: 'center',
    fontFamily: 'B-Inline-Regular',
    fontSize: RFValue(25)
  },

  VIEW_STATION_CARD: {
    height: 50,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 30,
    shadowColor: '#9316a5',
  },
  
  TEXT_STATION_CARD: {
    fontFamily: 'Montserrat-Regular', 
    fontSize: RFValue(18),
    textAlign: 'center',
  },

  /*================== VIEW OPERATION HOUR ==================*/ 

  VIEW_FUNC: {
    flexDirection: 'column',
    marginTop: 20
  },

  TEXT_HOUR: {
    fontFamily: 'Montserrat-Bold', 
    fontSize: RFValue(20),
  },

  TEXT_FUNC: {
    fontFamily: 'Montserrat-Regular', 
    fontSize: RFValue(16),
    textAlign: 'center',
    marginTop: 5
  },
  
  /*================== VIEW VEHICLES NEARBY ==================*/ 

  VIEW_VEHICLES: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 12,
  },

  TEXT_VEHIC_TITLE: {
    fontFamily: 'Montserrat-Bold', 
    fontSize: RFValue(20)
  },

  TEXT_COUNTER: {
    fontFamily: 'Montserrat-Regular', 
    fontSize: RFValue(20),
  },

  /* ================== VIEW LINHAS ================== */

  VIEW_LINES: {
    width: dimensions.width - 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  TOUCHABLE_LINES_CARD: {
    marginHorizontal: 5,
    height: dimensions.height / 10,
    width: dimensions.height / 3,
    borderWidth: 1,
    borderColor: '#9316a599',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    maxWidth: 350,
    maxHeight: 80,
  },

  TEXT_LINES_STYLE: {
    fontFamily: 'Montserrat-Regular', 
    fontSize: RFValue(12),
    textAlign: 'center'
  },

   /* ================== VIEW FLATLIST ================== */

  VIEW_FLAT_LIST: {
    width: dimensions.width - 15,
    padding: 5
  },


  VIEW_CARD: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    marginHorizontal: 4,
    marginTop: 20
  },



});

export default styles;
