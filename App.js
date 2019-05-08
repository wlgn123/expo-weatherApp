import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Weather from './Weather';

const API_KEY = "MAKE YOURE KEY";
const CELSIUS = 273.15;

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    temperature:null,
    name:null,
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: "위치정보를 가져오는데 실패하였습니다."
        });
      }
    );
  }

  _getWeather = (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
      .then( res => res.json())
      .then( json => {

        this.setState({
          temperature: (json.main.temp - CELSIUS).toFixed(2) * 1,
          name: json.weather[0].main,
          isLoaded: true,
        });
      })
  }

  render() {
    const { isLoaded, error, temperature, name } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar hidden={true} barStyle="light-content" />
        {isLoaded ? <Weather temp={temperature} weatherName={name} /> : 
          <View style={styles.loading}>
            <Text style={styles.loadingText}> Loading </Text>
            {error ? <Text style={styles.errorText}> {error} </Text> : null}
          </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    color: "red",
  },
  loading: {
    flex:1,
    backgroundColor: '#FDF6AA',
    justifyContent: "flex-end",
    paddingLeft: 25,
  },
  loadingText:{
    fontSize: 30,
    marginBottom: 100,
  },
});
