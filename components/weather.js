import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient' 
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'


const waetherOptions = {
        Clouds: {
          iconName: 'weather-cloudy',
          gradient: ['#3a7bd5', '#3a6073'],
          title: '구름이 많은 날',
          description: '다음 모험을 위한 맑은 날씨입니다.'
        },
        Clear: {
          iconName: 'weather-sunny',
          gradient: ['#FDC830', '#F37335'],
          title: '맑은 날!',
          description: '아름다운 하루가 기다리고 있어요.'
        },
        Rain: {
          iconName: 'weather-rainy',
          gradient: ['#3a7bd5', '#3a6073'],
          title: '비 오는 날...',
          description: '우산을 챙기세요. 오늘은 비가 올 것입니다.'
        },
        Snow: {
          iconName: 'weather-snowy',
          gradient: ['#E6DADA', '#274046'],
          title: '흰 눈이 내립니다.',
          description: '따뜻한 옷을 입고 다녀주세요.'
        },
        Thunderstorm: {
          iconName: 'weather-hurricane',
          gradient: ['#1F1C2C', '#928DAB'],
          title: '천둥 번개가 칩니다',
          description: '실내에 머무르고 폭풍우가 지나갈 때까지 기다려주세요.'
        },
        Drizzle: {
          iconName: 'weather-pouring',
          gradient: ['#757F9A', '#D7DDE8'],
          title: '가벼운 이슬비',
          description: '실내에 머무르는 것이 좋습니다.'
        },
        Mist: {
          iconName: 'weather-windy',
          gradient: ['#757F9A', '#D7DDE8'],
          title: '안개 낀 아침',
          description: '시야가 없어서 재미가 없을 겁니다.'
        },
        Smoke: {
          iconName: 'weather-windy-variant',
          gradient: ['#757F9A', '#D7DDE8'],
          title: '공기에 연기가 있습니다',
          description: '외출 시 주의하세요!'
        },
        Haze: {
          iconName: 'weather-hazy',
          gradient: ['#757F9A', '#D7DDE8'],
          title: '안개 주의보!',
          description: '직사광선을 피하세요.'
        },
        Dust: {
          iconName: 'weather-windy',
          gradient: ['#757F9A', '#D7DDE8'],
          title: '황사 폭풍 경보',
          description: '외출을 삼가하세요!'
        },
        Fog: {
          iconName: 'weather-fog',
          gradient: ['#757F9A', '#D7DDE8'],
          title: '안개 낀 아침',
          description: '머리를 숙이세요.'
        },
        Sand: {
          iconName: 'weather-pouring',
          gradient: ['#757F9A', '#D7DDE8'],
          title: '모래가 날리는 날',
          description: '실내에 머무르고 창문을 지켜보세요.'
        },
        Ash: {
          iconName: 'weather-pouring',
          gradient: ['#757F9A', '#D7DDE8'],
          title: '화산재 경보',
          description: '몸을 가리고 실내에 머무르세요. 창문을 피하세요.'
        },
        Squall: {
          iconName: 'weather-pouring',
          gradient: ['#757F9A', '#D7DDE8'],
          title: '돌풍 경고',
          description: '즉시 피난처로 이동하세요.'
        },
        Tornado: {
          iconName: 'weather-tornado',
          gradient: ['#757F9A', '#D7DDE8'],
          title: '토네이도 경고',
          description: '즉시 대피하세요!'
        }
      };
      

export default function Weather({temp, name, condition, setWeather}) {
    const [query, setQuery] = useState('')
    // console.log('temp', temp);
    // console.log('name', name);
    // console.log('condition', condition);
  return (
    <LinearGradient 
    colors={waetherOptions[condition].gradient} 
    style={styles.mainContainer}
    >
        <StatusBar barStyle={'default'}/>
        <View   style={{...styles.container, ...styles.textContainer}}>
            <MaterialCommunityIcons 
            name={waetherOptions[condition].iconName}
            size={72}
            color={'#fff'} />
            <View style={styles.flex}>
                <Text style={styles.temp}>{temp}°</Text>
                <Text style={styles.temp}>| {name}</Text>
            </View>
            <View style={styles.searchContainer}>
                <TextInput 
                placeholder='City' 
                style={styles.input} 
                value={query}
                onChangeText={text => setQuery(text)}
                />
                <Button title='Search' style={styles.btn} onPress={() => {setWeather(query)}}/>
            </View>
        </View >
        <View style={{...styles.container,  ...styles.textContainer}}>
            <Text style={styles.title}>{waetherOptions[condition].title}</Text>
            <Text style={styles.description}>{waetherOptions[condition].description}</Text>

        </View>
        

    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    temp: {
        fontSize: 32,
        color: 'white',
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16
    },
    textContainer: {
        paddingHorizontal: 40,
        flex:1, 
        justifyContent: 'center',
        alignItems: 'center' 
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10,
        textAlign:  'left'
    },
    description: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        textAlign:  'left'
    },
    searchContainer: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 10,
        marginTop: 10,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        shadowOffset:{width:5,height:5},
        shadowOpacity:0.3,
        shadowRadius:8,
        elevation:5,
    },
    input: {
        width: '70%'
    },
    btn: {
        width: '30%',

    }
})