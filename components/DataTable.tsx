import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

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

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <View style={styles.table}>
      <View style={[styles.row, styles.headerRow]}>
        {headers.map((header, index) => (
          <Text key={index} style={[styles.cell, styles.headerCell]}>
            {header}
          </Text>
        ))}
      </View>

      {paginatedData.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {Object.values(row)
            .slice(0, headers.length)
            .map((value, i) => (
              <Text key={i} style={styles.cell}>
                {String(value)}
              </Text>
            ))}
        </View>
      ))}

      {totalPages > 1 && (
        <View style={styles.pagination}>
          <Pressable
            onPress={() => page > 0 && setPage(page - 1)}
            disabled={page === 0}
          >
            <Text style={[styles.pageBtn, page === 0 && styles.disabled]}>
              Prev
            </Text>
          </Pressable>
          <Text style={styles.pageNumber}>
            Page {page + 1} of {totalPages}
          </Text>
          <Pressable
            onPress={() => page < totalPages - 1 && setPage(page + 1)}
            disabled={page >= totalPages - 1}
          >
            <Text
              style={[
                styles.pageBtn,
                page >= totalPages - 1 && styles.disabled,
              ]}
            >
              Next
            </Text>
          </Pressable>
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
    marginBottom: 4,
    paddingHorizontal: 8,
  },
  headerRow: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 8,
  },
  cell: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 6,
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
    marginTop: 12,
    gap: 16,
  },
  pageBtn: {
    fontWeight: "bold",
    color: "#00A0B6",
  },
  disabled: {
    color: "#aaa",
  },
  pageNumber: {
    fontSize: 14,
  },
});

export default DataTable;
