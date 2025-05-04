import React, { useEffect, useState, useCallback } from "react";
import { KeyboardAvoidingView, Platform, 
    Text, View, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native"
import Animated, { useSharedValue, useAnimatedStyle, 
    withTiming, withDelay, Easing } from "react-native-reanimated";
import styles from "./styles";

export default function Details({ navigation, route }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const uid = route.params?.uid || "1";

    const translateY = useSharedValue(1000);
    const opacity = useSharedValue(0);

    // useEffect for fetching data
    useEffect(() => {
        setData(null);
        setLoading(true);

        navigation.setOptions({
            title: route.params?.name || "Details"
        }, [route.params?.name]);

        fetch("https://www.swapi.tech/api/planets/" + uid)
            .then((resp) => resp.json())
            .then((data) => {
                setData(data.result.properties);
            }).finally(() => {
                setLoading(false);
            });
    }, [uid]);

    // useFocusEffect for animation
    useFocusEffect(
        useCallback(() => {
            translateY.value = 1000;
            opacity.value = 0;

            if(!loading){
                translateY.value = withTiming(0, {
                    duration: 600,
                    easing: Easing.out(Easing.exp)
                });
                opacity.value = withTiming(1, {
                    duration: 3000,
                    easing: Easing.out(Easing.exp)
                });
            }
        }, [loading])
    );

    const animatedStyle = useAnimatedStyle(() => {
        return{
            transform: [{ translateY: translateY.value }],
            opacity: opacity.value
        };
    });

    if(!loading){
        return (
            <KeyboardAvoidingView 
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <Animated.View style={animatedStyle}>
                    <Text style={styles.detailsTitle}>About {data?.name}</Text>

                    <ScrollView>
                        <View style={styles.detailsRow}>
                            <Text style={styles.detailsLabel}>Climate: </Text>
                            <Text style={styles.detailsItem}>{data?.climate}</Text>
                        </View>

                        <View style={styles.detailsRow}>
                            <Text style={styles.detailsLabel}>Surface Water: </Text>
                            <Text style={styles.detailsItem}>{data?.surface_water}%</Text>
                        </View>

                        <View style={styles.detailsRow}>
                            <Text style={styles.detailsLabel}>Diameter: </Text>
                            <Text style={styles.detailsItem}>{data?.diameter} km</Text>
                        </View>

                        <View style={styles.detailsRow}>
                            <Text style={styles.detailsLabel}>Rotation Period: </Text>
                            <Text style={styles.detailsItem}>{data?.rotation_period} hours</Text>
                        </View>

                        <View style={styles.detailsRow}>
                            <Text style={styles.detailsLabel}>Terrain: </Text>
                            <Text style={styles.detailsItem}>{data?.terrain}</Text>
                        </View>

                        <View style={styles.detailsRow}>
                            <Text style={styles.detailsLabel}>Gravity: </Text>
                            <Text style={styles.detailsItem}>{data?.gravity}</Text>
                        </View>

                        <View style={styles.detailsRow}>
                            <Text style={styles.detailsLabel}>Orbital Period: </Text>
                            <Text style={styles.detailsItem}>{data?.orbital_period} days</Text>
                        </View>

                        <View style={styles.detailsRow}>
                            <Text style={styles.detailsLabel}>Population: </Text>
                            <Text style={styles.detailsItem}>{data?.population}</Text>
                        </View>
                    
                    </ScrollView>
                </Animated.View>
                
            </KeyboardAvoidingView>
        );
    }
}