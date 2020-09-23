import React from 'react';
import { StyleSheet, View } from 'react-native';
var Header = function (props) {
    return (<View style={[
        styles.headerContainerStyle,
        props === null || props === void 0 ? void 0 : props.headerContainerStyle,
    ]}>
      <View style={[styles.headerLeftStyle, props === null || props === void 0 ? void 0 : props.headerLeftStyle]}>
        {props === null || props === void 0 ? void 0 : props.headerLeftComponent}
      </View>
      <View style={[styles.headerCenterStyle, props === null || props === void 0 ? void 0 : props.headerCenterStyle]}>
        {props === null || props === void 0 ? void 0 : props.headerCenterComponent}
      </View>
      <View style={[styles.headerRightStyle, props === null || props === void 0 ? void 0 : props.headerRightStyle]}>
        {props === null || props === void 0 ? void 0 : props.headerRightComponent}
      </View>
    </View>);
};
export default Header;
var styles = StyleSheet.create({
    headerContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 55,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    headerLeftStyle: {},
    headerCenterStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerRightStyle: {},
});
