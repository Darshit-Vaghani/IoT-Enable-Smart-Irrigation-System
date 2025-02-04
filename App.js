import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Import Screens
import DashboardScreen from "./screens/DashboardScreen";
import MotorControlScreen from "./screens/MotorControlScreen";
import NewsScreen from "./screens/NewsScreen";
import ScheduleScreen from "./screens/ScheduleScreen";
import AnalyticsScreen from "./screens/AnalyticsScreen";
import SettingsScreen from "./screens/SettingsScreen";

// Create Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  const [language, setLanguage] = useState("en"); // Default language: English

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { backgroundColor: "#f5f5f5", paddingBottom: 5 },
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Dashboard") iconName = "view-dashboard";
            else if (route.name === "Motor Control") iconName = "water-pump";
            else if (route.name === "News") iconName = "newspaper";
            else if (route.name === "Irrigation Schedule") iconName = "calendar-clock";
            else if (route.name === "Analytics") iconName = "chart-line";
            else if (route.name === "Settings") iconName = "cog";
            return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
          },
        })}
      >
        <Tab.Screen name="Dashboard">
  {() => <DashboardScreen language={language} />}
</Tab.Screen>
        {/* <Tab.Screen name="Dashboard" component={DashboardScreen} /> */}
        <Tab.Screen name="Motor Control">
  {() => <MotorControlScreen language={language} />}
</Tab.Screen>

        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="Irrigation Schedule" component={ScheduleScreen} />
        <Tab.Screen name="Analytics" component={AnalyticsScreen} />
        <Tab.Screen name="Settings">
          {() => <SettingsScreen setLanguage={setLanguage} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
