import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { clear } from "../state/cartSlice";
import { useRouter } from "expo-router";

const Order = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleOrder = async () => {
    if (!fullName || !phone || !address) {
      setMessage("All fields are required");
      setTimeout(() => { setMessage("") }, 3000);
      return;
    }

    // This is where you'd normally fetch user_id via API
    const userIdentifier = user.email || user.username || "unknown user";

    // Example logging - replace with actual POST call if needed
    console.log("Order placed by:", userIdentifier);
    console.log("Total price:", totalPrice);
    console.log("Shipping to:", address);

    setMessage("Order successfully placed");

    // Optional: clear the cart and reset form
    dispatch(clear());
    setFullName("");
    setPhone("");
    setAddress("");

    setTimeout(() => router.replace("/"), 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.formHeading}>Your Information</Text>

        <View style={styles.textInput}>
          <TextInput
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        <View style={styles.textInput}>
          <TextInput
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.textInput}>
          <TextInput
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
          />
        </View>

        <Text style={styles.totalText}>Total: ${totalPrice.toFixed(2)}</Text>

        {message && (
          <Text
            style={
              message.includes("successfully") ? styles.success : styles.error
            }
          >
            {message}
          </Text>
        )}

        <TouchableOpacity onPress={handleOrder}>
          <Text style={styles.orderBtn}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Order;

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
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15,
    marginBottom: 24,
    padding: 2,
    paddingLeft: 8,
    width: "100%",
  },
  totalText: {
    fontSize: 18,
    color: "green",
    marginBottom: 12,
  },
  orderBtn: {
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
    padding: 16,
    backgroundColor: "#00A0B6",
    width: 150,
    borderRadius: 32,
    marginTop: 8,
  },
  success: {
    color: "green",
    marginBottom: 12,
  },
  error: {
    color: "red",
    marginBottom: 12,
  },
});
