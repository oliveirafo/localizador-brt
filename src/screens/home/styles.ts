import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

const dimensions = Dimensions.get('screen')

const styles = StyleSheet.create({

  SAFE_CONTAINER: {
    height: dimensions.height,
    width: dimensions.width,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },

  VIEW_CONTAINER1: {
    flex: 0.3,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "flex-end",
    width: '100%'
  },

  VIEW_CONTAINER2: {
    flex: 0.7,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    marginTop: RFValue(5),
  },

  //  ============================= INPUT STYLE

  VIEW_INPUT: {
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    marginBottom: RFValue(5),
  },

  INPUT: {
    width: '90%',
    height: RFValue(50),
    backgroundColor:'#e2e2e299',
    paddingLeft: RFValue(10),
    borderRadius: RFValue(10),
    fontSize: RFValue(16),
    fontFamily: 'Montserrat-Regular',
  },


  //  ============================= TITLE STYLE

  TEXT_TITLE: {
    fontSize: RFValue(22),
    color: '#9316a5',
    marginBottom: RFValue(10),
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold'
  },

  //  ============================= FLATLIST STYLE

  FLATLIST: {
    width: dimensions.width,
    paddingTop: RFValue(10),
    paddingBottom: RFValue(5),
    marginBottom: RFValue(5),
  },

  VIEW_CARD: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //  ============================= BUTTON STYLE

  TOUCHABLE_CARD: {
    width: Dimensions.get('screen').width - RFValue(35),
    height: RFValue(40),
    borderRadius: RFValue(10),
    borderWidth: RFValue(1),
    borderColor: '#a040d5',
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: RFValue(10),
  },
  
  TEXT_TOUCHABLE_CARD: {
    textAlign: 'center',
    fontSize: RFValue(18),
    color: '#9316a5',
    fontFamily: 'Montserrat-Regular'
  }
});

export default styles;
