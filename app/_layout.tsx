import { StyleSheet } from "react-native";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{
        headerStyle: { backgroundColor: "#00A0B6" },
        headerTintColor: "#fff"
    }}>
        <Stack.Screen name="index"   options={{ title: "Start", headerShown: false }} />
        <Stack.Screen name="login"   options={{ title: "Login" }} />
        <Stack.Screen name="register" options={{ title: "Register" }} />
        <Stack.Screen name="home" options={{ title: "Home" }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
