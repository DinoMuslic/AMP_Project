import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "expo-router";
import { login } from "../state/userSlice";
import { loginService } from "../services/authService";
import Entypo from "@expo/vector-icons/Entypo";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [error, setError] = useState("");

  const handleEmail = (text: string) => {
    setEmail(text);
  };

  const handlePassword = (text: string) => {
    setPassword(text);
  };

  const handleIconClick = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleLogin = async () => {
    try {
      const user = await loginService(email, password);

      if (!user) {
        setError("Invalid credentials");
        return;
      }

      dispatch(login(user));
      setError("");
      router.push("/home");
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Text style={styles.text}>Login</Text>
          <Text style={styles.textSmall}>Hello, Welcome Back</Text>

          <TextInput
            style={styles.textInput}
            keyboardType="email-address"
            placeholder="Email"
            value={email}
            onChangeText={handleEmail}
          />

          <View style={styles.inputContainer}>
            <TextInput
              style={{ borderColor: "gray", width: "90%" }}
              placeholder="Password"
              secureTextEntry={secureTextEntry}
              value={password}
              onChangeText={handlePassword}
            />
            {secureTextEntry ? (
              <Entypo
                name="eye"
                size={24}
                color="black"
                onPress={handleIconClick}
              />
            ) : (
              <Entypo
                name="eye-with-line"
                size={24}
                color="black"
                onPress={handleIconClick}
              />
            )}
          </View>

          {error !== "" && <Text style={styles.error}>{error}</Text>}

          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={{ color: "#fff", fontSize: 18 }}>Login</Text>
          </TouchableOpacity>

          <View style={styles.registerContainer}>
            <Text style={{ color: "gray" }}>Don't have an Account?</Text>
            <TouchableOpacity onPress={() => router.push("/register")}>
              <Text style={{ marginLeft: 5, color: "#00A0B6" }}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 24,
  },
  loginContainer: {
    padding: 10,
    width: "90%",
    alignItems: "center",
    marginTop: 64,
  },
  text: {
    fontSize: 32,
    textAlign: "center",
    marginBottom: 24,
    color: "#7c85fcf",
    fontWeight: "bold",
  },
  textSmall: {
    fontSize: 18,
    textAlign: "center",
    color: "gray",
    marginBottom: 64,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 24,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 2,
    width: "100%",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15,
    marginBottom: 24,
    padding: 14,
    width: "100%",
  },
  loginBtn: {
    padding: 16,
    backgroundColor: "#00A0B6",
    width: 200,
    alignItems: "center",
    borderRadius: 32,
    marginTop: 64,
  },
  registerContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    color: "red",
  },
});
