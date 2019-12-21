import React, {Component} from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import {createAppContainer} from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer";
import {createStackNavigator} from "react-navigation-stack";
import Calendar from './screens/Calendar';
import LiveResults from "./screens/Live Results";
import MatchStats from "./screens/Match Stats";
import Results from "./screens/Results";
import Tournaments from "./screens/Tournaments";
import WorldCupResults from "./screens/World Cup Results";

class NavigationDrawerStructure extends Component {

    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return(
            <View style = {{flexDirection : "row"}}>
            <TouchableOpacity onPress = {this.toggleDrawer.bind(this)}>
            <Image 
                source = {require("./assets/drawer.png")}
                style = {{ width: 25, height: 25, marginLeft: 5 }} />
            </TouchableOpacity>
            </View>
        );
    }
}

const Calendar_StackNavigator = createStackNavigator({
    Calendar : {
        screen: Calendar,
        navigationOptions: ({navigation}) => ({
            title: "Calendar",
            headerLeft: <NavigationDrawerStructure navigationProps = {navigation} />,
            headerStyle: {
                backGroundColor: "dodgerblue",
            },
            headerTintColor: "lightslategrey",
        }),
    },
});


const LiveResults_StackNavigator = createStackNavigator({
     LiveResults : {
        screen: LiveResults,
        navigationOptions: ({navigation}) => ({
            title: "Live Results",
            headerLeft: <NavigationDrawerStructure navigationProps = {navigation} />,
            headerStyle: {
                backGroundColor: "dodgerblue",
            },
            headerTintColor: "lightslategrey",
        }),
    },
});

const Results_StackNavigator = createStackNavigator({
    Results : {
        screen: Results,
        navigationOptions: ({navigation}) => ({
            title: "Results",
            headerLeft: <NavigationDrawerStructure navigationProps = {navigation} />,
            headerStyle: {
                backGroundColor: "dodgerblue",
            },
            headerTintColor: "lightslategrey",
        }),
    },
});

const Tournaments_StackNavigator = createStackNavigator({
    Tournaments : {
        screen: Tournaments,
        navigationOptions: ({navigation}) => ({
            title: "Tournaments",
            headerLeft: <NavigationDrawerStructure navigationProps = {navigation} />,
            headerStyle: {
                backGroundColor: "dodgerblue",
            },
            headerTintColor: "lightslategrey",
        }),
    },
});



const App = createDrawerNavigator({
    Calendar: {
        screen: Calendar_StackNavigator,
        navigationOptions: {
            drawerLabel: "Calendar",
        },
    },
    LiveResults: {
        screen: LiveResults_StackNavigator,
        navigationOptions: {
            drawerLabel: "Live Results",
        },
    },
    Results: {
        screen: Results_StackNavigator,
        navigationOptions: {
            drawerLabel: "Results",
        },
    },
    Tournaments: {
        screen: Tournaments_StackNavigator,
        navigationOptions: {
            drawerLabel: "Tournaments",
        },
    },
    
});

export default createAppContainer(App);