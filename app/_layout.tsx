import { StyleSheet } from "react-native";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{
        headerStyle: { backgroundColor: "#7c85fc" },
        headerTintColor: "#fff"
    }}>
        <Stack.Screen name="index"   options={{ title: "Home", headerShown: false }} />
        <Stack.Screen name="login"   options={{ title: "Login" }} />
        <Stack.Screen name="register" options={{ title: "Sign Up" }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
