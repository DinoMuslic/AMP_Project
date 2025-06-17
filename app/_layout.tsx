import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Stack } from "expo-router";
import { Provider, useDispatch } from "react-redux";
import { store } from "../state/store";
import { logout } from "../state/userSlice";
import { useRouter } from "expo-router";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/login");
  };

  return (
    <TouchableOpacity onPress={handleLogout} style={{ marginRight: 16 }}>
      <Text style={{ color: "#fff", fontWeight: "bold" }}>Logout</Text>
    </TouchableOpacity>
  );
};

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
        <Stack.Screen
          name="home"
          options={{
            title: "Home",
            headerRight: () => <LogoutButton />,
          }}
        />
        <Stack.Screen name="order" options={{ title: "Order" }} />
        <Stack.Screen
          name="admin"
          options={{
            title: "Admin Page",
            headerRight: () => <LogoutButton />,
          }}
        />
      </Stack>
    </Provider>
  );
};

export default RootLayout;
