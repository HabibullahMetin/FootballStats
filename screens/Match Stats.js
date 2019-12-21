import React from "react";
import { Text, StyleSheet, View, TextInput,FlatList, Button} from "react-native";


export default class MatchStats extends React.Component{

    render() {
            return (

                 <View
      style={{
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
        borderColor: '#007FFF',
        borderWidth: 1,
        
      }}>
      <TextInput style= {{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        underlineColorAndroid="transparent"
        placeholder = "Maç adını giriniz"
        placeholderTextColor ="black"
        onChangeText= {start_date => this.setState({ start_date })}
        blurOnSubmit={false}
        
      />
      <Text  style = {{fontSize : 15, color : "red"}}> Örneğin :  Real Madrid vs Barcelona </Text>
                 <Button
        title="Maçı Getir"
        color = "dodgerblue"
         // onPress={() => Alert.alert('Simple Button pressed')}
        />
        </View>
            )
                

    }






}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
});