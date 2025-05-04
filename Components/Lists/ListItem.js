import React, { useRef, useCallback } from "react";
import { View, ScrollView, 
    Text, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Animated, { useSharedValue, useAnimatedStyle, 
    withTiming, withDelay, Easing } from "react-native-reanimated";
import styles from "../Pages/styles";

export default function ListItem({ onSwipe, name, id }){
    const scrollViewRef = useRef();
    const translateX = useSharedValue(-300);

    // Animation logic
    // useFocusEffect() is similar to useEffect() but is called
    // every time a screen is navigated to, rather than when it
    // is first rendered.
    useFocusEffect(
        useCallback(() => {
            // Start with the item off screen to the left
            translateX.value = -300;
            // Give each item a delay to stagger the animation
            translateX.value = withDelay(
                id * 100, withTiming(0, {
                    duration: 600,
                    easing: Easing.out(Easing.exp)
                })
            );
        }, [])
    );

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }]
        };
    });

    function onScroll(e){
        if (e.nativeEvent.contentOffset.x == 0 ||
            e.nativeEvent.contentOffset.x == 400
        ){
            onSwipe();
            scrollViewRef.current.scrollTo({x: 200, y: 0, animated: true});
        }
    }

    const scrollProps = {
        horizontal: true,
        pagingEnabled: true,
        showsHorizontalScrollIndicator: false,
        scrollEventThrottle: 10,
        contentOffset: {x: 200, y: 0},
        onScroll,
        ref: scrollViewRef
    };

    return(
        <Animated.View
            style={[styles.itemContainer, animatedStyle]}
        >
            <ScrollView {...scrollProps}>
            <View style={styles.swipeBlank}/>
                <TouchableOpacity>
                    <View style={styles.item}>
                        <Text style={styles.itemText}>
                            {name}
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.swipeBlank}/>
            </ScrollView>
        </Animated.View>
    );
}