import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const Register = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Register Page</Text>
            <Link href="/">Home Page</Link>
        </View>
    );
};

export default Register;

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