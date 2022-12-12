import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

const dimensions = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    height: dimensions.height,
    width: dimensions.width,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container1: {
    flex: 0.3,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "flex-end",
    width: '100%'
  },
  container2: {
    flex: 0.7,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
  },

  //  ============================= INPUT STYLE

  viewInput: {
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    marginBottom: RFValue(20),
  },
  input: {
    width: '90%',
    height: RFValue(50),
    backgroundColor:'#c2c2c290',
    paddingLeft: RFValue(10),
    borderRadius: RFValue(10),
    fontSize: RFValue(18),
    fontFamily: 'Montserrat-Regular'
  },

  //  ============================= TITLE STYLE

  title: {
    fontSize: RFValue(22),
    color: '#9316a5',
    marginBottom: RFValue(20),
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold'
  },

  //  ============================= FLATLIST STYLE

  flatList: {
    width: dimensions.width,
    paddingTop: RFValue(10),
    paddingBottom: RFValue(5),
    marginBottom: RFValue(5),
  },

  renderViewFlatList: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //  ============================= BUTTON STYLE

  touchable: {
    width: Dimensions.get('screen').width - RFValue(35),
    height: RFValue(40),
    borderRadius: RFValue(10),
    backgroundColor: '#a040d5' ,
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: RFValue(10),
  },
  text: {
    textAlign: 'center',
    fontSize: RFValue(20),
    color: '#fff',
    fontFamily: 'Montserrat-Regular'
  }
});

export default styles;
