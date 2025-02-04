// screens/DashboardScreen.js
import React from "react";
import { ScrollView, Text, StyleSheet, Dimensions } from "react-native";
import { Card } from "react-native-paper";
import { LineChart, ProgressChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#f5f5f5",
  backgroundGradientTo: "#ffffff",
  color: (opacity = 1) => `rgba(26, 115, 232, ${opacity})`,
  strokeWidth: 2,
};

export default function DashboardScreen({ language }) {
  const isGujarati = language === "gu";

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        {isGujarati ? "સ્માર્ટ સિંચાઈ ડેશબોર્ડ" : "Smart Irrigation Dashboard"}
      </Text>

      {/* Soil Moisture Chart */}
      <Card style={styles.card}>
        <Text style={styles.cardTitle}>
          {isGujarati ? "માટી ભેજ સ્તર" : "Soil Moisture Levels"}
        </Text>
        <LineChart
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{ data: [30, 50, 45, 70, 60, 80] }],
          }}
          width={screenWidth - 40}
          height={220}
          yAxisSuffix="%"
          chartConfig={chartConfig}
          bezier
        />
      </Card>

      {/* Water Consumption Chart */}
      <Card style={styles.card}>
        <Text style={styles.cardTitle}>
          {isGujarati ? "પાણી વપરાશ" : "Water Consumption"}
        </Text>
        <ProgressChart
          data={{ data: [0.7, 0.5, 0.8] }}
          width={screenWidth - 40}
          height={200}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
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
