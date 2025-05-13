import {
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

interface Props {
  name: string;
  type: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
}

const FlowerCard = ({ name, type, description, price, image }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContanier}>
        {image === undefined ? (
          <Entypo style={styles.noImage} name="image" color="black" />
        ) : (
          <Image style={styles.img} source={image}></Image>
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.flowerName]}>{name}</Text>
        <Text style={styles.flowerType}>{type}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <View style={styles.orderContainer}>
          <TouchableOpacity style={styles.orderBtn}>
            <Text style={{ textAlign: "center", color: "#fff", fontSize: 14 }}>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FlowerCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#f0efed",
    borderWidth: 2,
    borderColor: "#00A0B6",
    borderRadius: 10,
    marginBottom: 35,
    overflow: "hidden",
  },
  imageContanier: {
    width: "100%",
    aspectRatio: 1.85,
  },
  img: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  noImage: {
    fontSize: 150,
    color: "#ccc",
    textAlign: "center",
    lineHeight: 150,
  },
  textContainer: {
    width: "100%",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 14,
    paddingRight: 14,
    borderTopWidth: 1,
    borderColor: "#00A0B6",
  },
  flowerName: {
    fontSize: 22,
    color: "#00A0B6",
    fontWeight: "bold",
    textAlign: "center",
  },
  flowerType: {
    color: "gray",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    color: "#000",
    marginBottom: 5,
    textAlign: "justify",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
    marginTop: 10,
  },
  orderContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  orderBtn: {
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: "#00A0B6",
    width: 120,
    padding: 6,
    borderRadius: 15,
  },
});
