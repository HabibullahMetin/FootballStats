import React from "react";
import { Text, StyleSheet, View, TextInput,FlatList, Button} from "react-native";
import GetWorldCupResults from "../components/getWorldCupResults";


export default class WorldCupResults extends React.Component{ 

    state ={ showWorldCupResults: false,
    year: '',  
    };

  render() {
return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text> WorldCupResults </Text>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
       <TextInput style= {{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        underlineColorAndroid="transparent"
        keyboardType = "number-pad"
        placeholder = "Yılı giriniz"
        placeholderTextColor ="black"
        onChangeText= {year => this.setState({ year:year })}
        blurOnSubmit={false}
        
      />  
        <Button
          title="Sonuçları Getir"
            onPress={() => {
                this.setState({showWorldCupResults:true});
              }}
        />
        {this.state.showWorldCupResults && <GetWorldCupResults yil={this.state.year} />}
      </View>
  </View>
);
}
}
  /*

  state = {
        wcResults : [],
        year : '',
        showWorldCup : false,
    };
/*
     componentWillMount(){
        const wcResults =  fetchWorldCupResults(this.year);
        this.setState({wcResults});
    }  


          onPress() {
         const wcResults = fetchWorldCupResults(this.year);
         this.setState({wcResults})

          } 

    
 
    renderItem = ({ item }) => {
        const { date, time, group, home_team, visitant_team } = item;
    return ( <View
    style={{
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
        borderColor: '#007FFF',
        borderWidth: 1,
        
      }}>
    <Text>{date} - {time} - {group} -
         {home_team.name.full}  :  {home_team.stats.score} - {visitant_team.name.full} : {visitant_team.stats} 
         </Text>
       </View>
    );
    };


    render() {
     
       const { wcResults } = this.state;
        
      
       

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
        keyboardType = "number-pad"
        placeholder = "Yılı giriniz"
        placeholderTextColor ="black"
        onChangeText= {year => this.setState({ year })}
        //onEndEditing = {this.onPress}
        blurOnSubmit={false}
        
      />
      <Button
        title="Dünya Kupası Maçlarını Getir"
        color = "dodgerblue"
         //onPress={this.setState({wcResults})}
        onPress = {this.onPress}
        />

        <FlatList 
            data = {wcResults}
            keyExtractor = {keyExtractor}
            renderItem = {this.renderItem} />
        </View>
               
            )
                

    }






}

*/
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
});