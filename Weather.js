import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo';
import { Ionicons } from "@expo/vector-icons";
import PropTypes from 'prop-types';

const weatherCases = {
  Rain: {
    colors:["#00C6FB","#005BEA"],
    title: "Raining",
    subtitle: "For more Info",
    icon: "ios-rainy"
  },
  Clear: {
    colors:["#FEF253","#FF7300"],
    title: "Sunny",
    subtitle: "For more Info",
    icon: "ios-sunny"
  },
  Thunderstorm: {
    colors:["#00ECBC","#007ADF"],
    title: "Thunderstorm",
    subtitle: "For more Info",
    icon: "ios-thunderstorm"
  },
  Clouds: {
    colors:["#D7D7CC","#304352"],
    title: "Clouds",
    subtitle: "For more Info",
    icon: "ios-cloudy"
  },
  Snow: {
    colors:["#7DE2FC","#B9B6E5"],
    title: "Snow",
    subtitle: "For more Info",
    icon: "ios-snow"
  },
  Drizzle: {
    colors:["#B9F7FE","#66A6FF"],
    title: "이슬비",
    subtitle: "For more Info",
    icon: "ios-rainy-outline"
	},
  Haze: {
    colors:["#D7D7CC","#304352"],
    title: "안개",
    subtitle: "For more Info",
    icon: "ios-cloud-outline"
	}
}

function Weather({ weatherName, temp }){
	return(
		<LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
				<View style={styles.upper}>
					<Ionicons color="white" size={144} name={weatherCases[weatherName].icon} />
					<Text style={styles.temp}>{temp}º</Text>
				</View>
				<View style={styles.lower}>
					<Text style={styles.title}>{weatherCases[weatherName].title}</Text>
					<Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
				</View>
			</LinearGradient>
	)
}

Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	weatherName: PropTypes.string.isRequired,
}

export default Weather;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	upper:{
		flex:1,
		alignItems:"center",
		justifyContent:"center",
		color: 'white',
	},
	temp:{
		fontSize: 24,
		color: 'white',
		marginBottom: 24,
	},
	lower:{
		flex: 1,
		alignItems:"flex-start",
		justifyContent:"flex-end",
		paddingLeft: 25,
	},
	title: {
		fontSize: 38,
		color: 'white',
		marginBottom: 10,
		fontWeight: "300",
	},
	subtitle: {
		fontSize: 24,
		color: 'white',
		marginBottom: 24,
	},
});