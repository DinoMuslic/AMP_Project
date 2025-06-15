import {
  FlatList,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../state/store";
import FlowerCard from "../components/FlowerCard";
import { clear, remove, decrement } from "../state/cartSlice";
import { getAllFlowers } from "../services/flowerService";

const Home = () => {
  type Flower = {
    id: number;
    name: string;
    description: string;
    price: number;
    type: string;
    image: string;
  };

  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    const fetchFlowers = async () => {
      const fetchedFlowers = await getAllFlowers();
      setFlowers(fetchedFlowers || []);
    };
    fetchFlowers();
  }, []);

  const [search, setSearch] = useState("");
  const handleSearch = (text: string) => {
    setSearch(text);
  };

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );
  const dispatch = useDispatch();

  const imageMapping: { [key: string]: ImageSourcePropType } = {
    flower1: require("../assets/img/flower1.jpg"),
    flower2: require("../assets/img/flower2.jpg"),
    flower3: require("../assets/img/flower3.jpg"),
    flower4: require("../assets/img/flower4.jpg"),
    flower5: require("../assets/img/flower5.jpg"),
    flower6: require("../assets/img/flower6.jpg"),
  };

  const filteredFlowers = flowers.filter((flower) => {
    const searchLower = search.toLowerCase();
    return (
      flower.name.toLowerCase().includes(searchLower) ||
      flower.type.toLowerCase().includes(searchLower) ||
      flower.price.toString().includes(searchLower)
    );
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Search..."
        value={search}
        onChangeText={handleSearch}
      />

      {filteredFlowers.length > 0 ? (
        <FlatList
          data={filteredFlowers}
          horizontal={true}
          renderItem={({ item }: { item: Flower }) => {
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
      ) : (
        <View style={styles.noMatches}>
          <Text>No flowers to display.</Text>
        </View>
      )}

      {cartItems.length > 0 ? (
        <>
          <View style={styles.total}>
            <View style={styles.totalRow}>
              <Text style={styles.totalText}>
                Total: ${totalPrice.toFixed(2)}
              </Text>
              <TouchableOpacity>
                <Text style={styles.order}>Order</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.divider} />

            {cartItems.map((item) => (
              <View key={item.item} style={styles.cartItem}>
                <Text>
                  <Text style={styles.itemName}>{item.item}</Text>
                  <Text style={styles.itemQuantity}> x{item.quantity}</Text>
                  <Text style={styles.itemPrice}>
                    {" "}
                    — ${(Number(item.price) * item.quantity).toFixed(2)}
                  </Text>
                </Text>
                <View style={styles.actions}>
                  <Text
                    onPress={() => dispatch(remove(item.item))}
                    style={styles.removeAllText}
                  >
                    Remove All
                  </Text>
                  <Text
                    onPress={() => dispatch(decrement(item.item))}
                    style={styles.removeOneText}
                  >
                    Remove One
                  </Text>
                </View>
              </View>
            ))}

            {cartItems.length > 0 && (
              <Text onPress={() => dispatch(clear())} style={styles.clearCart}>
                Clear Cart
              </Text>
            )}
          </View>
        </>
      ) : null}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 12,
    paddingRight: 12,
  },
  search: {
    borderColor: "#00A0B6",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 12,
    marginTop: 12,
    marginBottom: 48,
  },
  total: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 24,
    paddingRight: 24,
    borderWidth: 2,
    borderColor: "#00A0B6",
    borderRadius: 15,
    marginTop: 32,
    marginBottom: 32,
  },
  totalText: {
    color: "green",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 14,
  },
  divider: {
    borderBottomColor: "#00A0B6",
    borderWidth: 1,
    marginBottom: 14,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    alignItems: "center",
  },
  itemName: {
    fontWeight: "bold",
    color: "#00A0B6",
  },
  itemQuantity: {
    fontWeight: "bold",
  },
  itemPrice: {
    color: "green",
  },
  actions: {
    flexDirection: "row",
  },
  removeAllText: {
    color: "red",
    marginLeft: 10,
  },
  removeOneText: {
    color: "orange",
    marginLeft: 10,
  },
  clearCart: {
    marginTop: 14,
    color: "#00A0B6",
    fontWeight: "bold",
    textAlign: "center",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  order: {
    color: "#00A0B6",
    fontSize: 16,
    fontWeight: "bold",
  },
  noMatches: {
    justifyContent: "center",
    alignItems: "center",
  },
});
