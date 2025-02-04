// screens/ScheduleScreen.js
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Card, TextInput } from "react-native-paper";

export default function ScheduleScreen() {
  const [schedule, setSchedule] = useState("");

  const saveSchedule = () => {
    Alert.alert("Schedule Saved", `Irrigation scheduled at: ${schedule}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Irrigation Scheduling</Text>
      <Card style={styles.card}>
        <Text style={styles.label}>Set Irrigation Time (HH:MM):</Text>
        <TextInput
          mode="outlined"
          label="Time"
          value={schedule}
          onChangeText={(text) => setSchedule(text)}
          style={styles.input}
          placeholder="e.g., 06:30"
        />
        <TouchableOpacity style={styles.button} onPress={saveSchedule}>
          <Text style={styles.buttonText}>Save Schedule</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 20, 
    backgroundColor: "#fff", 
    alignItems: "center"
  },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  card: { padding: 20, width: "100%", borderRadius: 10 },
  label: { fontSize: 18, marginBottom: 10 },
  input: { marginBottom: 20, backgroundColor: "#fff" },
  button: {
    backgroundColor: "#007AFF", 
    paddingVertical: 10, 
    alignItems: "center", 
    borderRadius: 5
  },
  buttonText: { color: "#fff", fontSize: 16 },
});
