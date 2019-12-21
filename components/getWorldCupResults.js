import React from 'react';
import { FlatList, ActivityIndicator, Text, TextInput, View  } from 'react-native';
import {fetchWorldCupResults} from "../utils/api";

const keyExtractor = ({ start_time }) => start_time.toString();

export default class GetWorldCupResults extends React.Component {

 state = {
    loading: true,
    error: false,
    wcResults: [],
  };

  async componentDidMount() {
    try {
      const { yil } = this.props;

      console.log(yil);

      const wcResults =  await fetchWorldCupResults();

      this.setState({
        loading: false,
        wcResults,
      });
    } catch (e) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  }

  renderItem = ({ item }) => {
        const { start_time, date, time, group, home_team, visitant_team } = item;
        console.log("renderlandı.");
    return ( 
    <View style={{
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
        borderColor: '#007FFF',
        borderWidth: 1}}>

          <Text> - {date} - {time} - {group} - {home_team.name.full}  :  {home_team.stats.score} - {visitant_team.name.full} : {visitant_team.stats} </Text>
       
       </View>
    );
  }


  render() {
    const { loading, error, wcResults } = this.state;

    return(
      <View>
            {loading && <ActivityIndicator size="large" />}
            {error && <Text>Error...</Text>}
            <FlatList
              data={this.wcResults}
              renderItem={this.renderItem}
            />
      </View>
    );
  }
}

//   render(){

//     if(this.state.isLoading){
//       return(
//         <View style={{flex: 1, padding: 20}}>
//           <ActivityIndicator/>
//         </View>
//       )
//     }

//     return(
//           <View style={{flex: 1, paddingTop:20}}>
//             <FlatList
//               data={this.state.dataSource}
//               renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
//               keyExtractor={({id}, index) => id}
//             />
//           </View>
//     );
//   }
// }