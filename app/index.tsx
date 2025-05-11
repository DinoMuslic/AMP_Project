import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";

const Page = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.h1}>Flower Shop</Text>
        <Text style={styles.text}>Welcome to the Flower shop</Text>
        <Text style={styles.text}>To proceed click the Button below</Text>
        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text style={styles.register}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 24,
    color: "gray",
  },
  textContainer: {
    marginTop: 64,
  },
  register: {
    marginLeft: 5,
    color: "#00A0B6",
    fontSize: 22,
    textAlign: "center",
    marginTop: 24,
  },
});
