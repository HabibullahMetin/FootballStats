import React from 'react';
import { FlatList, ActivityIndicator, Text, TextInput, View , Image } from 'react-native';
import {fetchCalendars} from "../utils/api";

const keyExtractor = ({ event_name }) => event_name.toString();

export default class GetCalendars extends React.Component {

 state = {
    loading: true,
    error: false,
    calendars: [],
  };

  async componentDidMount() {
    try {
      const {start_date, end_date, league } = this.props;

      const calendars =  await fetchCalendars(start_date, end_date, league);

      console.log(calendars);
      console.log("tamam");

      this.setState({
        loading: false,
        calendars,
      });
    } catch (e) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  }

  renderItem = ({ item }) => {
        const { start_time, event_name, tournament_name, stadium, home_team, visitant_team} = item;
    return ( 
    <View style={{
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
        marginBottom: 10,
        borderColor: '#007FFF',
        borderWidth: 1,
        flex :1}}>
        <Text>{start_time}</Text>
        <View style = {{flexDirection:"row", flex :1}}>
            <Image source={{uri: home_team.image}} style={{width: 20, height: 20}}/>
            <Text>{home_team.name.full} vs {visitant_team.name.full}</Text>
            <Image source={{uri: visitant_team.image}} style={{width: 20, height: 20}}/>
        </View>
        <Text> {stadium} </Text>
    </View>
    );
  }

  render() {
    const { loading, error, calendars } = this.state;

    return(
      <View style = {{flex :1}}>
            {loading && <ActivityIndicator size="large" />}
            {error && <Text>Error...</Text>}
            {!loading && <FlatList data={calendars} renderItem={this.renderItem} keyExtractor={keyExtractor}  />}
      </View>
    );
  }
}