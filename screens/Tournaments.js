import React from "react";
import { Text,Platform, StyleSheet, View, TextInput,FlatList, Button} from "react-native";
import {fetchTournaments} from "../utils/api";

const keyExtractor = ({ league }) => league.toString();

export default class Tournaments extends React.Component{
    state = {
        leagues : [],
    };

    async componentDidMount(){
        const leagues = await fetchTournaments();
        this.setState({leagues});
    }
 
    renderItem = ({ item }) => {
        const { league } = item;
        return <Text>{league}</Text>;
    };
    
    render() {   
        const { leagues } = this.state;

        return (
         <FlatList 
            data = {leagues}
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