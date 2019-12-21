import React from "react";
import { Text, StyleSheet, View, TextInput,FlatList, Button} from "react-native";
import GetCalendars from "../components/getCalendars";

export default class Calendar extends React.Component{
    state = {
      start_date : '',
      end_date : '',
      league : '',
      showCalendar: false,
    };
  
    render() {
            return (
              <View style={{
                flexGrow: 1,
                marginBottom: 10,
              }}>
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
        placeholder = "Başlangıç Tarihi (Yıl-Ay-Gün formatında giriniz )"
        placeholderTextColor ="black"
        onChangeText= {start_date => this.setState({ start_date })}
        blurOnSubmit={false}
        
      />
      <TextInput style= {{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        underlineColorAndroid="transparent"
        placeholder = "Bitiş Tarihi (Yıl-Ay-Gün formatında giriniz)"
        placeholderTextColor ="black"
        onChangeText= {end_date => this.setState({ end_date })}
        blurOnSubmit={false}
      />
      <Text  style = {{fontSize : 15, color : "red"}}> Günler arası fark en fazla 7 olmalıdır. </Text>
      <Text  style = {{fontSize : 15, color : "black"}}> Ligi seçiniz </Text>

      <Picker
       selectedValue={this.state.league}
       style={{height: 25, width: 50}}
       onValueChange={(itemValue, itemIndex) =>
        this.setState({league: itemValue})
     }>
  <Picker.Item label="US Major League Soccer" value="US Major League Soccer" />
  <Picker.Item label="Dutch Eredivisie" value="Dutch Eredivisie" />
  <Picker.Item label="Internationals" value="Internationals" />
  <Picker.Item label="Italian Serie A" value="Italian Serie A" />
  <Picker.Item label="Spanish La Liga" value="Spanish La Liga" />
  <Picker.Item label="Champions League" value="Champions League" />
  <Picker.Item label="European Championship Finals" value="European Championship Finals" />
  <Picker.Item label="English Premier League" value="English Premier League" />
  <Picker.Item label="European World Cup Qualifiers" value="European World Cup Qualifiers" />
  <Picker.Item label="Copa America" value="Copa America" />
  <Picker.Item label="Brazilian Serie A" value="Brazilian Serie A" />
  <Picker.Item label="African World Cup Qualifiers" value="African World Cup Qualifiers" />
  <Picker.Item label="World Cup" value="World Cup" />
  <Picker.Item label="French Ligue 1" value="French Ligue 1" />
  <Picker.Item label="European Championship Qualifiers" value="European Championship Qualifiers" />
  <Picker.Item label="Argentina Superliga" value="Argentina Superliga" />
  <Picker.Item label="Champions League Qualifying" value="Champions League Qualifying" />
  <Picker.Item label="German Bundesliga" value="German Bundesliga" />
  <Picker.Item label="Belgian Jupiler Pro League" value="Belgian Jupiler Pro League" />
  <Picker.Item label="Portuguese Primeira Liga" value="Portuguese Primeira Liga" />
  <Picker.Item label="UEFA Europa League" value="UEFA Europa League" />
  <Picker.Item label="FIFA Club World Cup" value="FIFA Club World Cup" />
  <Picker.Item label="Copa Libertadores" value="Copa Libertadores" />
  <Picker.Item label="Confederations Cup" value="Confederations Cup" />
  <Picker.Item label="Concacaf League" value="Concacaf League" />
  <Picker.Item label="UEFA Nations League" value="UEFA Nations League" />
</Picker>

    <Button
          title="Takvimi  Getir"
          color = "dodgerblue"
            onPress={() => {
                this.setState({showCalendar:true});
              }}
        />
    </View>
    {this.state.showCalendar && <GetCalendars start_date={this.state.start_date} end_date={this.state.end_date} league={this.state.league} />}
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
    container2 : {
        height : 30,
        

    },
});

