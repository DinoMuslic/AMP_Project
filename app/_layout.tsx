import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../state/store";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#00A0B6" },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="index"
          options={{ title: "Start", headerShown: false }}
        />
        <Stack.Screen name="login" options={{ title: "Login" }} />
        <Stack.Screen name="register" options={{ title: "Register" }} />
        <Stack.Screen name="home" options={{ title: "Home" }} />
        <Stack.Screen name="order" options={{ title: "Order" }} />
      </Stack>
    </Provider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
