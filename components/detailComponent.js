import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';

export default function DetailComponent ({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Détail</Text>
        </View>
    )
}
