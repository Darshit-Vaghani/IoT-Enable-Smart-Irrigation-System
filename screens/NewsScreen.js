// screens/NewsScreen.js
import React from "react";
import { ScrollView, Text, StyleSheet, FlatList } from "react-native";
import { Card } from "react-native-paper";

const newsData = [
  { id: "1", title: "Farmers adopt new irrigation methods", content: "Innovative tech is transforming traditional practices." },
  { id: "2", title: "Water conservation leads to increased yields", content: "A recent study shows reduced water usage boosts productivity." },
  { id: "3", title: "Local cooperative introduces smart farming", content: "Community-led initiatives are driving sustainable practices." },
];

export default function NewsScreen() {
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Text style={styles.newsContent}>{item.content}</Text>
    </Card>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Latest Farming News</Text>
      <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  card: { padding: 15, marginVertical: 10, borderRadius: 10 },
  newsTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
  newsContent: { fontSize: 16, color: "#555" },
});
