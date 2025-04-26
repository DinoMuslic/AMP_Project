import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login Page</Text>
            <Link href="/">Home Page</Link>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  text: {
    fontSize: 32,
  },
});