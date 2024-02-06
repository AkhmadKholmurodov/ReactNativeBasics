import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import Loader from './components/loader';
import { useEffect, useState } from 'react';
import Weather from './components/weather';
import * as Location from 'expo-location'

const API_KEY = "be60feb821cbd0e0d00b0b6a1e590756"
// https://api.openweathermap.org/data/2.5/weather?lon=128.7413&lat=35.8251&appid=be60feb821cbd0e0d00b0b6a1e590756



export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const getWeather = async (latitude, longitude) => {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lon=${longitude}&lat=${latitude}&appid=${API_KEY}`)
     setLocation(data);
     setIsLoading(false)
  }



  const getLocation = async () => {
    try {
      const {status} = await Location.requestForegroundPermissionsAsync();
      if (status  !== "granted") {
        Alert.alert('Hey!', 'We need your permission to access your location');
        setErrorMsg("Permission to access location was denied");
        return;
      }
      const {
        coords: {latitude, longitude}, } = await  Location.getCurrentPositionAsync({});
        getWeather(latitude, longitude)
    } catch (error) {
      Alert.alert("You can't use this app  without GPS");
    }
  }



  useEffect(() => {
      getLocation();
  }, [])
  
  return (
    isLoading ? <Loader/> : <Weather/>
  );
}

const styles = StyleSheet.create({});
