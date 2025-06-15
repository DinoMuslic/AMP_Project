import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Order = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleFullName = (text: string) => {
    setFullName(text);
  };

  const handlePhone = (text: string) => {
    setPhone(text);
  };

  const handleAddress = (text: string) => {
    setAddress(text);
  };

  const handleOrder = () => {
    if (fullName === "" || phone === "" || address === "") {
      setMessage("All fields are requiered");
    } else {
      setMessage("Order successfully placed");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.formHeading}>Your Information</Text>

        <View style={styles.textInput}>
          <TextInput
            placeholder="Full Name"
            value={fullName}
            onChangeText={handleFullName}
          />
        </View>

        <View style={styles.textInput}>
          <TextInput
            placeholder="Phone"
            value={phone}
            onChangeText={handlePhone}
          />
        </View>

        <View style={styles.textInput}>
          <TextInput
            placeholder="Address"
            value={address}
            onChangeText={handleAddress}
          />
        </View>

        {message !== "All fields are requiered" ? (
          <Text style={styles.success}>{message}</Text>
        ) : (
          <Text style={styles.error}>{message}</Text>
        )}

        <TouchableOpacity onPress={handleOrder}>
          <Text style={styles.orderBtn}>Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 24,
  },
  formHeading: {
    fontSize: 32,
    color: "#00A0B6",
    textAlign: "center",
    marginBottom: 32,
  },
  formContainer: {
    width: "90%",
    marginTop: 128,
    alignItems: "center",
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
    padding: 2,
    paddingLeft: 8,
    width: "100%",
  },
  orderBtn: {
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
    padding: 16,
    backgroundColor: "#00A0B6",
    width: 150,
    alignItems: "center",
    borderRadius: 32,
    marginTop: 8,
  },
  success: {
    color: "green",
  },
  error: {
    color: "red",
  },
});

export default Order;
