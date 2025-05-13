import {
  ActivityIndicator,
  InteractionManager,
  StyleSheet,
  View,
} from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const task = InteractionManager.runAfterInteractions(() => {
      router.replace("/login");
    });

    return () => task.cancel(); // cleanup
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={"#00A0B6"}/>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 24,
    color: "gray",
  },
  textContainer: {
    marginTop: 64,
  },
  register: {
    marginLeft: 5,
    color: "#00A0B6",
    fontSize: 22,
    textAlign: "center",
    marginTop: 24,
  },
});
