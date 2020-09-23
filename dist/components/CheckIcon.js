import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
var CheckIcon = function (_a) {
    var index = _a.index;
    return (<View style={styles.checkIcon}>
      <Text style={{ color: 'white' }}>{index}</Text>
    </View>);
};
export default CheckIcon;
var styles = StyleSheet.create({
    checkIcon: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 5,
        right: 5,
        width: 25,
        height: 25,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: '#18a0fb',
    },
});
