import React from "react";
import { Text, StyleSheet,View,TextInput,FlatList,Button} from "react-native";
import GetResults from "../components/getResults";


export default class Results extends React.Component{
    state = {
      start_date : '',
      end_date : '',
      league : '',
      showResult: false,
    };

    render() {
            return (
              <View  style={{
                flexGrow: 1,
                marginBottom: 10,
              }}>
      <View style={{
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
        borderColor: '#007FFF',
        borderWidth: 1,
      }}>

      <TextInput style= {{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        underlineColorAndroid="transparent"
        placeholder = "Başlangıç Tarihi (Yıl-Ay-Gün formatında giriniz)"
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

    <TextInput style= {{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        underlineColorAndroid="transparent"
        placeholder = " Ligi giriniz"
        placeholderTextColor ="black"
        onChangeText= {league => this.setState({ league })}
        blurOnSubmit={false}
      />
        <Button
          title="Sonuçları Getir"
          color = "dodgerblue"
            onPress={() => {
                this.setState({showResult:true});
              }}
        />
    </View>
    {this.state.showResult && <GetResults start_date={this.state.start_date} end_date={this.state.end_date} league={this.state.league} />}
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