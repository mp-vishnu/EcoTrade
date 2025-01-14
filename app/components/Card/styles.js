import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
    card: {
      borderRadius: 15,
      backgroundColor: colors.white,
      marginBottom: 20,
      overflow: "hidden",
    },
    detailsContainer: {
      padding: 20,
    },
    image: {
      width: "100%",
      height: 200,
      resizeMode:"contain"
    },
    subTitle: {
      color: colors.secondary,
      fontWeight: "bold",
    },
    title: {
      marginBottom: 7,
    },
  });
  

export default styles;