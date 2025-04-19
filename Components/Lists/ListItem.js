import React, { useRef } from "react";
import { 
    View, ScrollView, Text, TouchableOpacity 
} from "react-native";
import styles from "../Pages/styles";

export default function ListItem({ onSwipe, name }){
    const scrollViewRef = useRef();

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
        <View style={styles.itemContainer}>
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
        </View>
    );
}