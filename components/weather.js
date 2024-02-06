import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Weather() {
  return (
    <View style={styles.constainer}>
        <Text>Weather</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },
})