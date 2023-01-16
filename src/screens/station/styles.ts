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
    marginTop: RFValue(10),
  },

  VIEW_TITLE: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RFValue(20),
  },

  VIEW_IMAGE: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: RFValue(20),
  },

  VIEW_INFO_LOCAL: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: RFValue(20)
  },

  TEXT_TITLE_STATION_INFO: {
    textAlign: 'center',
    fontFamily: 'B-Inline-Regular',
    fontSize: RFValue(25)
  },

  VIEW_STATION_CARD: {
    height: RFValue(50),
    width: RFValue(Dimensions.get('screen').width - 20),
    borderRadius: RFValue(50),
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
    marginTop: RFValue(20),
  },

  TEXT_HOUR: {
    fontFamily: 'Montserrat-Bold', 
    fontSize: RFValue(20),
  },

  TEXT_FUNC: {
    fontFamily: 'Montserrat-Regular', 
    fontSize: RFValue(16),
    textAlign: 'center',
    marginTop: RFValue(5)
  },
  
  /*================== VIEW VEHICLES NEARBY ==================*/ 

  VIEW_VEHICLES: {
    flexDirection: 'row',
    marginTop: RFValue(40),
    marginBottom: RFValue(12)
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
    width: dimensions.width - RFValue(20),
    alignItems: 'center',
    justifyContent: 'center',
  },

  TOUCHABLE_LINES_CARD: {
    marginHorizontal: RFValue(5),
    height: RFValue(60),
    width: RFValue(180),
    borderWidth: RFValue(1),
    borderColor: '#9316a5',
    borderRadius: RFValue(20),
    alignItems: 'center',
    justifyContent: 'center',
  },

  TEXT_LINES_STYLE: {
    fontFamily: 'Montserrat-Regular', 
    fontSize: RFValue(12),
    textAlign: 'center'
  },

   /* ================== VIEW FLATLIST ================== */

  VIEW_FLAT_LIST: {
    width: dimensions.width - RFValue(15),
    padding: RFValue(5),
  },


  VIEW_CARD: {
    justifyContent: 'center',
    alignItems: 'center',
    height: RFValue(150), 
    marginHorizontal: RFValue(4), 
    marginTop: RFValue(20)
  },



});

export default styles;
