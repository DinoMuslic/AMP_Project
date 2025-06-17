import { FlatList, StyleSheet, Text, View } from "react-native";
import DataTable from "../components/DataTable";

const sections = [
  {
    title: "ORDERS",
    headers: ["User ID", "Name", "Address", "Total Price", "Ordered At"],
    data: [
      {
        user_id: 1,
        name: "John Doe",
        address: "123 Elm St",
        total_price: "$29.99",
        ordered_at: "2025-06-17",
      },
      {
        user_id: 2,
        name: "Jane Smith",
        address: "456 Oak Ave",
        total_price: "$59.49",
        ordered_at: "2025-06-16",
      },
      {
        user_id: 3,
        name: "Bob Lee",
        address: "789 Pine Rd",
        total_price: "$15.00",
        ordered_at: "2025-06-15",
      },
    ],
  },
  {
    title: "USERS",
    headers: ["ID", "Username", "Email", "Role"],
    data: [
      { id: 1, username: "john", email: "john@example.com", role: "admin" },
      { id: 2, username: "jane", email: "jane@example.com", role: "user" },
      { id: 3, username: "bob", email: "bob@example.com", role: "user" },
      { id: 4, username: "alice", email: "alice@example.com", role: "user" },
      { id: 5, username: "joe", email: "joe@example.com", role: "user" },
      { id: 6, username: "tom", email: "tom@example.com", role: "user" },
    ],
  },
  {
    title: "FLOWERS",
    headers: ["ID", "Name", "Type", "Price"],
    data: [
      { id: 1, name: "Rose", type: "Red", price: "$1.99" },
      { id: 2, name: "Tulip", type: "Yellow", price: "$2.49" },
      { id: 3, name: "Lily", type: "White", price: "$2.99" },
      { id: 4, name: "Daisy", type: "Pink", price: "$1.49" },
      { id: 5, name: "Sunflower", type: "Large", price: "$3.99" },
      { id: 6, name: "Orchid", type: "Purple", price: "$4.99" },
    ],
  },
];

const AdminPage = () => {
  return (
    <FlatList
      data={sections}
      keyExtractor={(item) => item.title}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.section}>
          <Text style={styles.heading}>{item.title}</Text>
          <View style={styles.hr} />
          <DataTable headers={item.headers} data={item.data} />
        </View>
      )}
    />
  );
};

export default AdminPage;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 64,
    paddingHorizontal: 8,
  },
  section: {
    marginBottom: 32,
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
});
