import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, } from 'react-native';
import _ from 'lodash';
var FolderList = function (_a) {
    var folderList = _a.folderList, setGroupName = _a.setGroupName, setShowFolderList = _a.setShowFolderList;
    return (<>
      {folderList && (<ScrollView style={{ paddingHorizontal: 10, paddingTop: 10 }}>
          {_.map(folderList.sort(function (a, b) { return a.index - b.index; }), function (item, i) {
        return (<TouchableOpacity key={"FolderList-" + i} onPress={function () {
            setGroupName(item.groupName);
            setShowFolderList(false);
        }} style={{
            flexDirection: 'row',
            paddingBottom: 10,
        }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                      {item.title}
                    </Text>
                    <Text>{item.count}</Text>
                  </View>
                  <View>
                    <Image style={{ width: 50, height: 50 }} source={{ uri: item.mainImageUrl }} resizeMode={'cover'}/>
                  </View>
                </TouchableOpacity>);
    })}
        </ScrollView>)}
    </>);
};
export default FolderList;
