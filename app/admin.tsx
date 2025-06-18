import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import DataTable from "../components/DataTable";
import { getAllOrders } from "../services/orderService";
import { getAllUsers } from "../services/userService";
import { getAllFlowersRemovedProperties } from "../services/flowerService";

const AdminPage = () => {
  const [orders, setOrders] = useState([]);

  type User = {
    id: number;
    username: string;
    email: string;
    role: string;
  };
  const [users, setUsers] = useState<Omit<User, "id">[]>([]);

  type Flower = {
    id: number;
    name: string;
    type: string;
    description: string;
    price: number;
    image: string;
  };
  const [flowers, setFlowers] = useState<
    Omit<Flower, "id" | "description" | "image">[]
  >([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const fetchedOrders = await getAllOrders();
      setOrders(fetchedOrders);
    };

    const fetchUsers = async () => {
      const fetchedUsers = await getAllUsers();
      setUsers(fetchedUsers);
    };

    const fetchFlowers = async () => {
      const fetchedFlowers = await getAllFlowersRemovedProperties();
      setFlowers(fetchedFlowers);
    };

    fetchOrders();
    fetchUsers();
    fetchFlowers();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>ORDERS</Text>
      <View style={styles.hr} />
      <DataTable
        headers={["Name", "Address", "Phone", "Total Price", "Ordered At"]}
        data={orders}
      />

      <Text style={styles.heading}>USERS</Text>
      <View style={styles.hr} />
      <DataTable headers={["Username", "Email", "Role"]} data={users} />

      <Text style={styles.heading}>FLOWERS</Text>
      <View style={styles.hr} />
      <DataTable headers={["Name", "Type", "Price"]} data={flowers} />

      <View style={styles.endSpacer} />
    </ScrollView>
  );
};

export default AdminPage;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 64,
    paddingHorizontal: 8,
  },
  heading: {
    fontSize: 32,
    color: "#00A0B6",
    marginTop: 24,
    marginBottom: 12,
  },
  hr: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginBottom: 12,
  },
  endSpacer: {
    height: 32,
  },
});
