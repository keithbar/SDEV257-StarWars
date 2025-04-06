import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import List from "./List";

// mapItems() takes a json object and creates an array
// of the given field
// I've tried to make this as generic as possible, but
// the "films" json object is structured completely
// differently from all the others, and I struggled to
// find an elegant solution. So for now it changes its
// behavior specifically when grabbing film data.
function mapItems(items, field, listName) {
    if(listName == "films"){
        return items.map((item, i) => ({
            key: i.toString(),
            value: item.properties[field]
        }));
    } else{
        return items.map((item, i) => ({
            key: i.toString(),
            value: item[field]
        }));
    }
}

// listName is a string indicating which resource to get
// results is a string indicating which attribute is to
//   represent each individual item for the list
// field is a string indicating which attribute to display
export default function ListContainer({ listName, results, field }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://www.swapi.tech/api/" + listName)
            .then((resp) => resp.json())
            .then((data) => {
                setData(mapItems(data[results], field, listName));
            });
    }, []);
    return (
        <List data={data} />
    );
}

ListContainer.propTypes = {
    listName: PropTypes.string.isRequired,
    results: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
}