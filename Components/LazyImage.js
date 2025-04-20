import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { View, Image, Text } from "react-native";
import styles from "./Pages/styles";

const headerImages = {
    Planets: require("../assets/headers/Planets.jpg"),
    Films: require("../assets/headers/Films.jpg"),
    Spaceships: require("../assets/headers/Spaceships.jpg"),
};

function Placeholder(props){
    if (props.loaded){
        return null;
    } else {
        return <View {...props}/>
    }
}

export default function LazyImage(props){
    const [loaded, setLoaded] = useState(false);
    const [source, setSource] = useState(null);
    
    useEffect(() => {
        setSource(headerImages[props.name]);
    }, []);

    return(
        <View style={props.style}>
            <Placeholder loaded={loaded} {...props} />
            <Image
                {...props}
                source={source}
                onLoad={() => {
                    if(source != null){
                        setLoaded(true);
                    }
                }}
            />
        </View>
    )
}

