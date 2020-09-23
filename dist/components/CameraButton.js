import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Modal, } from 'react-native';
import CameraScreen from './CameraScreen';
var CameraButton = function (_a) {
    var takePhoto = _a.takePhoto, cameraButtonIcon = _a.cameraButtonIcon, cameraPreviewProps = _a.cameraPreviewProps, cameraPreviewStyle = _a.cameraPreviewStyle, cameraFlipIcon = _a.cameraFlipIcon, cameraCaptureIcon = _a.cameraCaptureIcon;
    var _b = useState(false), showModal = _b[0], setShowModal = _b[1];
    return (<>
      <TouchableOpacity onPress={function () {
        setShowModal(true);
    }}>
        <View>
          {cameraButtonIcon || (<View style={styles.cameraIconCon}>
              <Image source={require('../assets/camera-icon.png')} style={styles.cameraIcon}/>
            </View>)}
        </View>
      </TouchableOpacity>
      <Modal visible={showModal} onRequestClose={function () {
        setShowModal(false);
    }}>
        <CameraScreen {...{
        takePhoto: takePhoto,
        setShowModal: setShowModal,
        cameraPreviewProps: cameraPreviewProps,
        cameraPreviewStyle: cameraPreviewStyle,
        cameraFlipIcon: cameraFlipIcon,
        cameraCaptureIcon: cameraCaptureIcon,
    }}/>
      </Modal>
    </>);
};
export default CameraButton;
var styles = StyleSheet.create({
    cameraIconCon: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 60,
    },
    cameraIcon: {
        width: 30,
        height: 30,
    },
});
