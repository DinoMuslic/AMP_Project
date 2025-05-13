import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";

const Register = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleUsername = (text: string) => {
    setUsername(text);
  };

  const handleEmail = (text: string) => {
    setEmail(text);
  };

  const handlePassword = (text: string) => {
    setPassword(text);
  };

  const handleConfirmPassword = (text: string) => {
    setConfirmPassword(text);
  };

  const handleIconClick = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = () => {
    if (username === "" || email === "" || password === "") {
      setError("All fields are requiered.");
      return false;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return false;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }

    setError("");
    setSuccess("Successfully registered.");

    const user = {
      username: username,
      email: email,
      password: password,
    };

    console.log("User: ", user);

    return true;
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <View style={styles.registerContainer}>
          <Text style={styles.text}>Create an Account</Text>
          <Text style={styles.textSmall}>Welcome!</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Username"
            value={username}
            onChangeText={handleUsername}
          />
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

          <View style={styles.inputContainer}>
            <TextInput
              style={{ borderColor: "gray", width: "90%" }}
              placeholder="Confirm Password"
              secureTextEntry={secureTextEntry}
              value={confirmPassword}
              onChangeText={handleConfirmPassword}
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

          {success !== "" && <Text style={styles.success}>{success}</Text>}
          {error !== "" && <Text style={styles.error}>{error}</Text>}

          <TouchableOpacity style={styles.registerBtn} onPress={handleRegister}>
            <Text style={{ color: "#fff", fontSize: 18 }}>Register</Text>
          </TouchableOpacity>

          <View style={styles.loginContainer}>
            <Text style={{ color: "gray" }}>Already have an Account?</Text>
            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text style={{ marginLeft: 5, color: "#00A0B6" }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 24,
  },
  registerContainer: {
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
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 2,
    width: "100%",
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15,
    marginBottom: 24,
    padding: 14,
    width: "100%",
  },
  registerBtn: {
    padding: 16,
    backgroundColor: "#00A0B6",
    width: 200,
    alignItems: "center",
    borderRadius: 32,
    marginTop: 60,
  },
  loginContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    color: "red",
  },
  success: {
    fontWeight: "bold",
    color: "green",
  },
});
