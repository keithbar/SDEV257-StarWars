import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, View, StatusBar, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { registerRootComponent } from "expo";
import LazyImage from "./Components/LazyImage";
import Planets from "./Components/Pages/Planets";
import Films from "./Components/Pages/Films";
import Spaceships from "./Components/Pages/Spaceships";
import styles from "./Components/Pages/styles";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


export default function App() {
  function getHeaderImage(name){
    return{
      headerBackground: () => (
        <View style={styles.headerImage} >
          <LazyImage
            style={styles.headerImage}
            resizeMode="cover"
            name={name}
          />
          <LinearGradient
            colors={['black', 'transparent']}
            start={{ x: 0, y: .2 }}
            end={{ x: 0, y: .7 }}
            style={StyleSheet.absoluteFill}
          />
        </View>
      )
    };
  }

  return (
    <NavigationContainer>
      <StatusBar 
        translucent={true} 
        backgroundColor={"transparent"}
        barStyle="light-content"
      />

      {Platform.OS === "ios" && (
        <Tab.Navigator
          screenOptions={{ 
            headerTintColor: "white",
            headerTitleAlign: "left"
           }}
        >
          <Tab.Screen name="Planets" component={Planets} 
            options={getHeaderImage("Planets")} />
          <Tab.Screen name="Films" component={Films} 
            options={getHeaderImage("Films")} />
          <Tab.Screen name="Spaceships" component={Spaceships} 
            options={getHeaderImage("Spaceships")} />
        </Tab.Navigator>
      )}

      {Platform.OS == "android" && (
        <Drawer.Navigator
          screenOptions={{ headerTintColor: "white" }}
        >
          <Drawer.Screen name="Planets" component={Planets}
            options={getHeaderImage("Planets")} />
          <Drawer.Screen name="Films" component={Films} 
            options={getHeaderImage("Films")} />
          <Drawer.Screen name="Spaceships" component={Spaceships} 
            options={getHeaderImage("Spaceships")} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

registerRootComponent(App);