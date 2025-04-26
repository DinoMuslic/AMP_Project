import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/img/background.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Text style={[styles.text, styles.header ]}>Welcome to the Flower Shop</Text>
        <Text style={styles.text}>Clicking the Button bellow You can</Text>
        <Link href="/login" style={styles.link}>
          Login
        </Link>
        <Text style={styles.text}>Or if You don't have an Account You can</Text>
        <Link href="/register" style={styles.link}>
          Sign Up
        </Link>
      </ImageBackground>
    </View>
  );
}

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: "#fff",
    fontSize: 18,
    marginVertical: 15,
    fontWeight: "bold",
  },
  header: {
    fontSize: 32,
    textAlign: "center",
  },
  backgroundImage: {
    width: "100%",
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    marginVertical: 10,
    backgroundColor: "#eee",
    padding: 6,
    borderRadius: 10,
    borderColor: "#7c85fc",
    borderWidth: 1.5,
    width: 150,
    textAlign: "center",
  },
});
