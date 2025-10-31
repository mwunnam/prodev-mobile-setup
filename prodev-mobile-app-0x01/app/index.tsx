import { Text, View, StylesSheet } from "react-native";

const styles = StylesSheet.create({
  container: {
    backgroundColor: "#90caf9",
  },

  largeText: {
    fontSize: 30,
    color: "#f44336",
    marginBottom: 5,
    fontWeight: "700",
    fontVariant: ["smal-caps"],
  },

  mediumText: {
    fontSize: 20,
    color: "#9c27b0",
    marginBottom: 10,
    fondWeight: "500",
    textAlign: "right",
  },

  smallText: {
    fontSize: 15,
    color: "#2196f3",
    fontWeight: "400",
    textAlign: "center",
  },
});

export default function Index() {
  return (
    <View>
      <Text style={styles.largeText}>Typescipt is greate if you practice more</Text>
      <Text style={styles.mediumText}>React Navite provides you a single codebase for cross platforms</Text>
      <Text style={styles.samllText}>ALX is awesome</Text>
    </View>
  );
}


