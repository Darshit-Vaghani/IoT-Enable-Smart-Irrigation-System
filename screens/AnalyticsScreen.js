// screens/AnalyticsScreen.js
import React from "react";
import { ScrollView, Text, StyleSheet, Dimensions } from "react-native";
import { Card } from "react-native-paper";
import { BarChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#f5f5f5",
  backgroundGradientTo: "#ffffff",
  color: (opacity = 1) => `rgba(26, 115, 232, ${opacity})`,
  strokeWidth: 2,
};

export default function AnalyticsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Analytics</Text>
      <Card style={styles.card}>
        <Text style={styles.cardTitle}>Irrigation Efficiency</Text>
        <BarChart
          data={{
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [{ data: [80, 60, 90, 70] }],
          }}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  card: { padding: 20, marginVertical: 10, borderRadius: 10 },
  cardTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
});
