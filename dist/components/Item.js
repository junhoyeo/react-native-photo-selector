import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Platform, } from 'react-native';
import FastImage from 'react-native-fast-image';
import { observer } from 'mobx-react';
import CommonStore from '../store/CommonStore';
var ImageComp = function (_a) {
    var uri = _a.uri, imageSize = _a.imageSize;
    return Platform.select({
        ios: (<Image source={{ uri: uri }} style={{ height: imageSize, width: imageSize }} resizeMode={'cover'}/>),
        default: (<FastImage source={{ uri: uri }} style={{ height: imageSize, width: imageSize }} resizeMode={FastImage.resizeMode.cover}/>),
    });
};
var Item = observer(function (_a) {
    var item = _a.item, selectedMarker = _a.selectedMarker, imageMargin = _a.imageMargin, imageSize = _a.imageSize, onClick = _a.onClick, isZoomEnabled = _a.isZoomEnabled, setZoomImage = _a.setZoomImage;
    var localSelected = CommonStore.localSelected;
    var selectedIndex = localSelected
        .map(function (x) { return x.uri; })
        .indexOf(item.uri);
    function _handleClick(item) {
        onClick(item);
    }
    var isSelected = selectedIndex > -1;
    return (<TouchableOpacity style={{
        marginBottom: imageMargin,
        marginRight: imageMargin,
    }} onPress={function () {
        isZoomEnabled
            ? setZoomImage(item.uri)
            : onClick(item);
    }}>
        <ImageComp {...{
        uri: item.uri,
        imageSize: imageSize,
    }}/>

        <TouchableOpacity onPress={function () {
        _handleClick(item);
    }} style={styles.selectedMarkerTouchable}>
          {isSelected ? (selectedMarker(selectedIndex + 1)) : (<View style={styles.selectMarker}/>)}
        </TouchableOpacity>
      </TouchableOpacity>);
});
export default Item;
var styles = StyleSheet.create({
    selectedMarkerTouchable: {
        right: 0,
        width: 40,
        height: 40,
        elevation: 1,
        position: 'absolute',
    },
    selectMarker: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 5,
        right: 5,
        width: 25,
        height: 25,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#888',
    },
});
