import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';

export default function DetailComponent ({ route, navigation }) {
    const { itemId } = route.params;
    const { otherParam } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        </View>
    )
}
