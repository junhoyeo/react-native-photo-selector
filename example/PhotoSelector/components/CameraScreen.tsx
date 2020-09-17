import React, { useRef, useState } from 'react'
import {
  View,
  ViewStyle,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native'

import { RNCamera, RNCameraProps } from 'react-native-camera'
import CameraRoll from '@react-native-community/cameraroll'

export interface CameraScreenProps {
  cameraPreviewProps?: RNCameraProps
  cameraPreviewStyle?: ViewStyle
  cameraFlipIcon?: JSX.Element
  cameraCaptureIcon?: JSX.Element
}

const CameraScreen = ({
  takePhoto,
  setShowModal,
  cameraPreviewProps,
  cameraPreviewStyle,
  cameraFlipIcon,
  cameraCaptureIcon,
}: CameraScreenProps & {
  takePhoto: () => void
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}): JSX.Element => {
  const cameraRef = useRef<RNCamera>(null)
  const [cameraType, setCameraType] = useState(
    RNCamera.Constants.Type.back
  )
  const flipCamera = (): void =>
    setCameraType(
      cameraType === RNCamera.Constants.Type.back
        ? RNCamera.Constants.Type.front
        : RNCamera.Constants.Type.back
    )
  const _takePhoto = async (): Promise<void> => {
    if (cameraRef.current) {
      cameraRef.current.takePictureAsync().then((data) => {
        CameraRoll.save(data.uri, { type: 'photo' }).then(() => {
          setShowModal(false)
          takePhoto()
        })
      })
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <RNCamera
          style={[styles.preview, cameraPreviewStyle]}
          captureAudio={false}
          {...{
            ref: cameraRef,
            type: cameraType,
            ...cameraPreviewProps,
          }}
        />
        <TouchableOpacity
          onPress={flipCamera}
          style={styles.flipButton}
        >
          {cameraFlipIcon || (
            <View
              style={{
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 60,
              }}
            >
              <Image
                source={require('../assets/flip.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={_takePhoto}
        style={styles.recordingButton}
      >
        {cameraCaptureIcon || (
          <View
            style={{
              borderWidth: 10,
              borderColor: '#18a0fb',
              backgroundColor: 'white',
              borderRadius: 100,
              width: 100,
              height: 100,
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  )
}

export default CameraScreen

const styles = StyleSheet.create({
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
})
