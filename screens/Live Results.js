import React from "react";
import { Text, StyleSheet, View, TextInput,FlatList, Button} from "react-native";
import {fetchLiveResults} from "../utils/api";

const keyExtractor = ({ event_name }) => event_name.toString();

export default class LiveResults extends React.Component{
state = {
        liveResults : [],
    };

    async componentDidMount(){
        const liveResults = await fetchLiveResults();
        this.setState({liveResults});
    }
 
    renderItem = ({ item }) => {
        const { start_time, event_name, result, tournament_name } = item;
    return <Text>{start_time} - {event_name} - {result[0]} : {result[1]} - {tournament_name} </Text>;
    };
    
    render() {   
        const { liveResults } = this.state;

        return (
         <FlatList 
            data = {liveResults}
            keyExtractor = {keyExtractor}
            renderItem = {this.renderItem} /> 
       );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
});