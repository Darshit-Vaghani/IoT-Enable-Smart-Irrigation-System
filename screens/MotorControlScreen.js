// screens/MotorControlScreen.js
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

export default function MotorControlScreen({ language }) {
  const [motorOn, setMotorOn] = useState(false);

  const toggleMotor = () => {
    setMotorOn((prev) => !prev);
  };

  // Define translations
  const translations = {
    en: {
      header: "Turn On Motor",
      motorStatus: "Motor is",
      turnOn: "Turn ON",
      turnOff: "Turn OFF",
      indicators: "System Indicators",
      powerOn: "Power On",
      correctSupply: "Correct Supply",
      threePhaseCorrect: "Three Phase Correct",
      motorOn: "Motor On",
      errorMotorOn: "Error to Motor On",
    },
    gu: {
      header: "મોટર ચાલુ કરો",
      motorStatus: "મોટર",
      turnOn: "ચાલુ કરો",
      turnOff: "બંધ કરો",
      indicators: "સિસ્ટમ સૂચક",
      powerOn: "પાવર ચાલુ",
      correctSupply: "સચોટ વીજ પુરવઠો",
      threePhaseCorrect: "ત્રણ તબક્કા સાચા",
      motorOn: "મોટર ચાલુ",
      errorMotorOn: "મોટર ચાલુ કરવાની ભૂલ",
    },
  };

  const t = translations[language];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{t.header}</Text>
      <Card style={styles.card}>
        <Text style={styles.status}>{`${t.motorStatus} ${motorOn ? "ON" : "OFF"}`}</Text>
        <TouchableOpacity
          style={[styles.button, motorOn ? styles.buttonOff : styles.buttonOn]}
          onPress={toggleMotor}
        >
          <Text style={styles.buttonText}>{motorOn ? t.turnOff : t.turnOn}</Text>
        </TouchableOpacity>
      </Card>

      {/* Indicator Section */}
      <Card style={styles.indicatorCard}>
        <Text style={styles.indicatorHeader}>{t.indicators}</Text>
        {renderIndicator(t.powerOn, true)}
        {renderIndicator(t.correctSupply, true)}
        {renderIndicator(t.threePhaseCorrect, true)}
        {renderIndicator(t.motorOn, motorOn)}
        {renderIndicator(t.errorMotorOn, !motorOn)}
      </Card>
    </View>
  );
}

const renderIndicator = (label, isActive) => {
  return (
    <View style={styles.indicatorContainer}>
      <MaterialIcons name="circle" size={16} color={isActive ? "green" : "red"} />
      <Text style={styles.indicatorText}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  header: { fontSize: 30, fontWeight: "bold", marginBottom: 20, fontFamily: "monospace" },
  card: {
    padding: 20,
    width: "100%",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  status: { fontSize: 20, marginBottom: 20 },
  button: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8 },
  buttonOn: { backgroundColor: "#007AFF" },
  buttonOff: { backgroundColor: "#FF3B30" },
  buttonText: { color: "#fff", fontSize: 16 },

  // Indicator Styles
  indicatorCard: {
    padding: 20,
    width: "100%",
    borderRadius: 10,
    alignItems: "flex-start",
    backgroundColor: "#f8f9fa",
  },
  indicatorHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 13,
  },
  indicatorText: {
    fontSize: 16,
    marginLeft: 10,
  },
});
