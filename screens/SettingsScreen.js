// screens/SettingsScreen.js
import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { Card } from "react-native-paper";

export default function SettingsScreen({ setLanguage }) {
  const [isGujarati, setIsGujarati] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = isGujarati ? "en" : "gu";
    setIsGujarati(!isGujarati);
    setLanguage(newLanguage); // Update app-wide language state
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{isGujarati ? "સેટિંગ્સ" : "Settings"}</Text>
      <Card style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>{isGujarati ? "ગુજરાતી ભાષા" : "Gujarati Language"}</Text>
          <Switch value={isGujarati} onValueChange={toggleLanguage} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "monospace",
  },
  card: {
    padding: 20,
    width: "100%",
    alignItems: "center",
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  label: {
    fontSize: 18,
  },
});
