import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

const dimensions = Dimensions.get('screen')

const styles = StyleSheet.create({

  SAFE_CONTAINER: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },

  VIEW_CONTAINER1: {
    height: dimensions.height / 3.3,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "flex-end",
    width: '100%'
  },

  VIEW_CONTAINER2: {
    height: dimensions.height / 1.5,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    marginTop: 5,
  },

  //  ============================= INPUT STYLE

  VIEW_INPUT: {
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    marginBottom: 5,
  },

  INPUT: {
    width: '90%',
    height: 50,
    backgroundColor:'#e2e2e299',
    paddingLeft: 10,
    borderRadius: 10,
    fontSize: RFValue(16),
    fontFamily: 'Montserrat-Regular',
  },


  //  ============================= TITLE STYLE

  TEXT_TITLE: {
    fontSize: RFValue(22),
    color: '#9316a5',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold'
  },

  //  ============================= FLATLIST STYLE

  FLATLIST: {
    width: dimensions.width,
    paddingTop: 10,
    paddingBottom: 5,
    marginBottom: 5,
  },

  VIEW_CARD: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //  ============================= BUTTON STYLE

  TOUCHABLE_CARD: {
    width: Dimensions.get('screen').width - RFValue(35),
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#a040d5',
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  
  TEXT_TOUCHABLE_CARD: {
    textAlign: 'center',
    fontSize: RFValue(16),
    color: '#9316a5',
    fontFamily: 'Montserrat-Regular'
  }
});

export default styles;
