import React, { useState, useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NetInfo from "@react-native-community/netinfo";
import { Platform, View, StatusBar, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { registerRootComponent } from "expo";
import Toast from "react-native-toast-message";
import LazyImage from "./Components/LazyImage";
import Planets from "./Components/Pages/Planets";
import Films from "./Components/Pages/Films";
import Spaceships from "./Components/Pages/Spaceships";
import Details from "./Components/Pages/Details"
import styles from "./Components/Pages/styles";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const connectedMap = {
  none: "Disconnected",
  unknown: "Disconnected",
  wifi: "Connected",
  cell: "Connected",
  mobile: "Connected"
};

const networkErrorMessage = {
  type: "error",
  text1: "You're offline",
  text2: "This app requires an internet connection.",
  position: "bottom",
  autoHide: false
};

export default function App() {
  const  [connected, setConnected] = useState("Connected");
  const previousNetworkState = useRef("Connected");

  useEffect(() => {
    function onNetworkChange(connection){
      const networkState = connectedMap[connection.type];
      if(networkState == "Disconnected" && 
        previousNetworkState.current == "Connected")
      {
        Toast.show(networkErrorMessage);
      }
      else if(networkState == "Connected"){
        Toast.hide();
      }
      previousNetworkState.current = networkState;
      setConnected(networkState);
    }
    const unsubscribe = NetInfo.addEventListener(onNetworkChange);
    return () =>  {
      unsubscribe();
    };
  }, []);

  function handleNavigationStateChange(){
    if (previousNetworkState.current == "Disconnected"){
      Toast.show(networkErrorMessage);
    }
  }

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
    <>
      <NavigationContainer
        onStateChange={handleNavigationStateChange}
      >
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
            <Tab.Screen name="Details" component={Details}
              options={{
                ...getHeaderImage("Planets"),
                tabBarItemStyle: { display: "none" }
              }} />
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
            <Drawer.Screen name="Details" component={Details}
              options={{
                ...getHeaderImage("Planets"),
                drawerItemStyle: { display: "none" }
              }} />

          </Drawer.Navigator>
        )}
      </NavigationContainer>
      <Toast/>
    </>
  );
}

registerRootComponent(App);