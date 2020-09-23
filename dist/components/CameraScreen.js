var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React, { useRef, useState } from 'react';
import { View, Image, TouchableOpacity, Dimensions, StyleSheet, } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';
var CameraScreen = function (_a) {
    var takePhoto = _a.takePhoto, setShowModal = _a.setShowModal, cameraPreviewProps = _a.cameraPreviewProps, cameraPreviewStyle = _a.cameraPreviewStyle, cameraFlipIcon = _a.cameraFlipIcon, cameraCaptureIcon = _a.cameraCaptureIcon;
    var cameraRef = useRef(null);
    var _b = useState(RNCamera.Constants.Type.back), cameraType = _b[0], setCameraType = _b[1];
    var flipCamera = function () {
        return setCameraType(cameraType === RNCamera.Constants.Type.back
            ? RNCamera.Constants.Type.front
            : RNCamera.Constants.Type.back);
    };
    var _takePhoto = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (cameraRef.current) {
                cameraRef.current.takePictureAsync().then(function (data) {
                    CameraRoll.save(data.uri, { type: 'photo' }).then(function () {
                        setShowModal(false);
                        takePhoto();
                    });
                });
            }
            return [2 /*return*/];
        });
    }); };
    return (<View style={styles.container}>
      <View>
        <RNCamera style={[styles.preview, cameraPreviewStyle]} captureAudio={false} {...__assign({ ref: cameraRef, type: cameraType }, cameraPreviewProps)}/>
        <TouchableOpacity onPress={flipCamera} style={styles.flipButton}>
          {cameraFlipIcon || (<View style={{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 60,
    }}>
              <Image source={require('../assets/flip.png')} style={{
        width: 30,
        height: 30,
    }}/>
            </View>)}
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={_takePhoto} style={styles.recordingButton}>
        {cameraCaptureIcon || (<View style={{
        borderWidth: 10,
        borderColor: '#18a0fb',
        backgroundColor: 'white',
        borderRadius: 100,
        width: 100,
        height: 100,
    }}/>)}
      </TouchableOpacity>
    </View>);
};
export default CameraScreen;
var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    preview: {
        height: Dimensions.get('window').width,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    flipButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    recordingButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
