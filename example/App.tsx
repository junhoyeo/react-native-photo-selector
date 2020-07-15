import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'

import CameraRollSelector, { PhotoProps } from './PhotoSelector'

const App = (): JSX.Element => {
  const _callback = (
    images: PhotoProps[],
    image: PhotoProps
  ): void => {
    console.log('selected images :', images) // eslint-disable-line
    console.log('current image :', image) // eslint-disable-line
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CameraRollSelector
          callback={_callback}
          maximum={3}
          assetType="All"
          groupTypes="All"
          imagesPerRow={3}
          imageMargin={5}
          useCamera={true}
          loader={
            <View>
              <Text>Initializing...</Text>
            </View>
          }
          loadingMoreContainerStyle={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: '#abcabcAA',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          loadingMoreLoader={
            <View>
              <Text>Loading...</Text>
            </View>
          }
          emptyText={
            'no photos... If there are any images in your album, please check your app permissions'
          }
        />
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: { width: '100%', height: '100%' },
})
