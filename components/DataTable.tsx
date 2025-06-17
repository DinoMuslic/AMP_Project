import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

interface DataTableProps {
  headers: string[];
  data: Record<string, any>[];
  itemsPerPage?: number;
}

const DataTable: React.FC<DataTableProps> = ({
  headers,
  data,
  itemsPerPage = 5,
}) => {
  const [page, setPage] = useState(0);

  const paginatedData = data.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  const renderHeader = () => (
    <View style={styles.row}>
      {headers.map((header, index) => (
        <Text key={index} style={[styles.cell, styles.headerCell]}>
          {header}
        </Text>
      ))}
    </View>
  );

  const renderRow = ({ item }: { item: Record<string, any> }) => (
    <View style={styles.row}>
      {Object.values(item)
        .slice(0, headers.length)
        .map((value, index) => (
          <Text key={index} style={styles.cell}>
            {String(value)}
          </Text>
        ))}
    </View>
  );

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <View style={styles.table}>
      {renderHeader()}
      <FlatList
        data={paginatedData}
        renderItem={renderRow}
        keyExtractor={(_, index) => index.toString()}
      />
      {totalPages > 1 && (
        <View style={styles.pagination}>
          <Text
            style={[styles.pageBtn, page === 0 && styles.disabled]}
            onPress={() => page > 0 && setPage(page - 1)}
          >
            Prev
          </Text>
          <Text style={styles.pageNumber}>
            Page {page + 1} of {totalPages}
          </Text>
          <Text
            style={[styles.pageBtn, page >= totalPages - 1 && styles.disabled]}
            onPress={() => page < totalPages - 1 && setPage(page + 1)}
          >
            Next
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    marginBottom: 32,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  cell: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  headerCell: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#00A0B6",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  pageBtn: {
    marginHorizontal: 12,
    color: "#00A0B6",
    fontWeight: "bold",
  },
  disabled: {
    color: "#aaa",
  },
  pageNumber: {
    fontSize: 14,
  },
});

export default DataTable;
