import {
  FlatList,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { useRouter } from "expo-router";

import { RootState } from "../state/store";
import FlowerCard from "../components/FlowerCard";

import flowers from "../data/flowers.json";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";

const Home = () => {
  const imageMapping: { [key: string]: ImageSourcePropType } = {
    flower1: require("../assets/img/flower1.jpg"),
    flower2: require("../assets/img/flower2.jpg"),
    flower3: require("../assets/img/flower3.jpg"),
    flower4: require("../assets/img/flower4.jpg"),
    flower5: require("../assets/img/flower5.jpg"),
    flower6: require("../assets/img/flower6.jpg"),
  };

  return (
    <View>
      <FlatList
        style={styles.list}
        data={flowers}
        renderItem={({ item }) => {
          const image = imageMapping[item.image.split(".")[0]];
          return (
            <FlowerCard
              name={item.name}
              type={item.type}
              description={item.description}
              price={item.price}
              image={image}
            />
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  list: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 24,
    paddingRight: 24,
  },
});
