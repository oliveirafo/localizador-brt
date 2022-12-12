import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  // ================ VIEW TITLE STYLE

  viewTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  viewImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: RFValue(15),
  },

  viewInfoLocal: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  textInfo: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular'
  }
});

export default styles;
