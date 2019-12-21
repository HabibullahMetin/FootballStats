import React from 'react';
import { FlatList, ActivityIndicator, Text, TextInput, View, Image } from 'react-native';
import {fetchResults} from "../utils/api";

const keyExtractor = ({ event_name }) => event_name.toString();

export default class GetResults extends React.Component {

 state = {
    loading: true,
    error: false,
    results: [],
  };

  async componentDidMount() {
    try {
      const {start_date, end_date, league } = this.props;

      const results =  await fetchResults(start_date, end_date, league);

      console.log(results);
      console.log("tamam");

      this.setState({
        loading: false,
        results,
      });
    } catch (e) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  }

  renderItem = ({ item }) => {
        const { event_name, result, home_team, visitant_team, tournament_type, stadium } = item;
    return ( 
    <View style={{
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
        borderColor: '#007FFF',
        borderWidth: 1,
        flex:1}}> 
        <View style = {{flexDirection:"row", flex :1}}>
            <Image source={{uri: home_team.image}} style={{width: 20, height: 20}}/>
            <Text>{home_team.name.full} : {result[0]}  - {visitant_team.name.full} : {result[1]}  </Text>
            <Image source={{uri: visitant_team.image}} style={{width: 20, height: 20}}/>
        </View>
        <Text> {tournament_type} -- {stadium}  </Text>

       
       </View>
    );
  }


  render() {
    const { loading, error, results } = this.state;

    return(
      <View style = {{flex :1}}>
            {loading && <ActivityIndicator size="large" />}
            {error && <Text>Error...</Text>}
            {!loading && <FlatList data={results} renderItem={this.renderItem} keyExtractor={keyExtractor}  />}
      </View>
    );
  }
}