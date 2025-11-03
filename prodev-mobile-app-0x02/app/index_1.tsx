import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text, ImageBackground, Dimensions, TouchableOpacity, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {

  },
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: Dimensions.get("window").height,

  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 50,
  },

  textGroup: {
    alignItems: "center",
  },

  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },

  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },

  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    flex: 1,
  },

  button: {
    borderColor: "white",
    borederWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    backgroundColor: "white",
    flex: 1,
  },

  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },
});
export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}> 
        <ImageBackground
          source={require("@/assets/images/background-image.png")}
          style={styles.background}
          resizeModer="cover"
        >

        <View style={styles.companyLogo}>
          <Image source={require("@/assets/images/Logo.png")}></Image>
          <View style={styles.textGroup}>
            <Text style={styles.textLarge}>Find your favorite place here</Text>
            <Text style={styles.textSmall}>The best prices for over 2 </Text>
            <Text style={styles.textSmall}>million properties worldwide</Text>
          </View>

          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.button}>
              <Text style={[styles.textSmall, { color: "black" }]}>John here</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.transparentButton}>
              <Text style={ styles.textSmall }>Sign In</Text>
            </TouchableOpacity>
          </View>

          
        </View>

        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
