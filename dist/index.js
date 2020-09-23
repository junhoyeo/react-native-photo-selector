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
import React, { useEffect, useState, useRef } from 'react';
import { Modal, StyleSheet, View, Text, FlatList, ActivityIndicator, TouchableOpacity, Image, Dimensions, Platform, } from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import ImageZoom from 'react-native-image-pan-zoom';
import _ from 'lodash';
import CheckIcon from './components/CheckIcon';
import Header from './components/Header';
import ImageItem from './components/Item';
import CameraButton from './components/CameraButton';
import FolderList from './components/FolderList';
import CommonStore from './store/CommonStore';
var _a = Dimensions.get('window'), windowWidth = _a.width, windowHeight = _a.height;
var PhotoSelector = function (props) {
    var _a = props.maximum, maximum = _a === void 0 ? 15 : _a, _b = props.selectSingleItem, selectSingleItem = _b === void 0 ? false : _b, _c = props.assetType, assetType = _c === void 0 ? 'Photos' : _c, _d = props.callback, callback = _d === void 0 ? function () {
        return;
    } : _d, _e = props.selectedImagesUri, selectedImagesUri = _e === void 0 ? [] : _e, zoomImageOption = props.zoomImageOption, imageListOption = props.imageListOption, loadingOption = props.loadingOption, cameraOption = props.cameraOption, headerOption = props.headerOption;
    var _f = useState(), lastCursor = _f[0], setLastCursor = _f[1];
    var _g = useState(true), initialLoading = _g[0], setInitialLoading = _g[1];
    var _h = useState(false), loadingMore = _h[0], setLoadingMore = _h[1];
    var _j = useState(true), hasNextPage = _j[0], setPageInfo = _j[1];
    var _k = useState([]), data = _k[0], setData = _k[1];
    var _l = useState(), zoomImage = _l[0], setZoomImage = _l[1];
    var _m = useState(0), imageSize = _m[0], setImageSize = _m[1];
    var _o = useState(false), showFolderList = _o[0], setShowFolderList = _o[1];
    var _p = useState(), groupName = _p[0], setGroupName = _p[1];
    var _q = useState([]), folderList = _q[0], setForderList = _q[1];
    var flatListRef = useRef(null);
    var imagesPerRow = (imageListOption === null || imageListOption === void 0 ? void 0 : imageListOption.imagesPerRow) ? imageListOption.imagesPerRow
        : 3;
    var imageMargin = (imageListOption === null || imageListOption === void 0 ? void 0 : imageListOption.imageMargin) ? imageListOption.imageMargin
        : 5;
    function _setImageSize() {
        var width = windowWidth;
        var containerWidth = imageListOption === null || imageListOption === void 0 ? void 0 : imageListOption.containerWidth;
        if (containerWidth) {
            width = containerWidth;
        }
        setImageSize((width - (imagesPerRow - 1) * imageMargin * 2)
            / imagesPerRow);
    }
    function _addFolderList(props) {
        CameraRoll.getPhotos({
            first: 1,
            groupName: props.groupName,
            groupTypes: props.groupName ? 'Album' : 'All',
            assetType: assetType,
        }).then(function (_a) {
            var edges = _a.edges;
            if (edges.length > 0) {
                setForderList(function (ori) {
                    return ori.concat([
                        __assign(__assign({}, props), { mainImageUrl: edges[0].node.image.uri }),
                    ]);
                });
            }
        });
    }
    function _getAlbum() {
        var _this = this;
        if (Platform.OS === 'ios') {
            var getPhotoMax_1 = 100;
            CameraRoll.getPhotos({
                first: getPhotoMax_1,
                assetType: assetType,
                groupTypes: 'All',
            }).then(function (result) {
                var length = result.edges.length;
                _addFolderList({
                    title: 'All',
                    index: 0,
                    count: "" + length + (length < getPhotoMax_1 ? '' : '+'),
                });
            });
        }
        CameraRoll.getAlbums({
            assetType: assetType,
        }).then(function (list) {
            // All
            if (Platform.OS !== 'ios') {
                _addFolderList({
                    title: 'All',
                    index: 0,
                    count: _.sum(list.map(function (x) { return x.count; })),
                });
            }
            // Folder List
            _.forEach(list, function (item, index) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    _addFolderList(__assign(__assign({}, item), { index: index + 1, groupName: item.title }));
                    return [2 /*return*/];
                });
            }); });
        });
    }
    useEffect(function () {
        var defaultLocaleSelected = _.map(selectedImagesUri, function (uri) { return ({
            filename: null,
            uri: uri,
            height: 0,
            width: 0,
            fileSize: null,
            playableDuration: null,
        }); });
        CommonStore.localSelected = defaultLocaleSelected;
        _setImageSize();
        _getAlbum();
    }, []);
    useEffect(function () {
        _resetGetPhotos();
    }, [groupName]);
    function _resetGetPhotos() {
        setData([]);
        getPhotosWithCameraRoll(true);
    }
    function _onEndReached() {
        fetch();
    }
    function fetch() {
        if (!loadingMore) {
            getPhotosWithCameraRoll();
        }
    }
    function getPhotosWithCameraRoll(init) {
        if (hasNextPage || init) {
            setLoadingMore(true);
            var fetchParams = {
                first: 100,
                groupTypes: groupName ? 'Album' : 'All',
                assetType: assetType,
                groupName: groupName,
            };
            fetchParams.after = init ? undefined : lastCursor;
            CameraRoll.getPhotos(fetchParams).then(function (_a) {
                var page_info = _a.page_info, edges = _a.edges;
                setPageInfo(page_info.has_next_page);
                setLastCursor(page_info.end_cursor);
                var asstesImages = edges.map(function (_a) {
                    var image = _a.node.image;
                    return image;
                });
                setData(function (ori) {
                    return init ? asstesImages : ori.concat(asstesImages);
                });
                setLoadingMore(false);
                setInitialLoading(false);
            });
        }
    }
    function selectImage(image) {
        var localSelected = CommonStore.localSelected;
        var index = localSelected.map(function (x) { return x.uri; }).indexOf(image.uri);
        if (index >= 0) {
            localSelected.splice(index, 1);
        }
        else {
            if (selectSingleItem) {
                localSelected.splice(0, localSelected.length);
            }
            if (localSelected.length < maximum) {
                localSelected.push(image);
            }
        }
        CommonStore.localSelected = localSelected;
        callback(localSelected, image);
    }
    function takePhoto() {
        _resetGetPhotos();
    }
    var HeaderCenter = function () {
        return (<TouchableOpacity onPress={function () {
            setShowFolderList(!showFolderList);
        }}>
        <Text>
          {groupName || 'All'} {showFolderList ? '▲' : '▼'}
        </Text>
      </TouchableOpacity>);
    };
    var selectedMarker = function (index) {
        var selectedMarker = props.selectedMarker;
        if (selectedMarker) {
            if (typeof selectedMarker === 'function') {
                return selectedMarker(index);
            }
            else {
                return selectedMarker;
            }
        }
        return <CheckIcon index={index}/>;
    };
    if (initialLoading) {
        return (<>
        {(loadingOption === null || loadingOption === void 0 ? void 0 : loadingOption.initialLoader) || (<View style={styles.loader}>
            <ActivityIndicator size="large"/>
          </View>)}
      </>);
    }
    return (<>
      <Header {...headerOption} headerLeftComponent={(headerOption === null || headerOption === void 0 ? void 0 : headerOption.headerLeftComponent) || (<View style={{ width: 20 }}/>)} headerCenterComponent={(headerOption === null || headerOption === void 0 ? void 0 : headerOption.headerCenterComponent) || <HeaderCenter />} headerRightComponent={(headerOption === null || headerOption === void 0 ? void 0 : headerOption.headerRightComponent) || (<CameraButton {...__assign({ takePhoto: takePhoto }, cameraOption)}/>)}/>
      {showFolderList ? (<FolderList {...{ folderList: folderList, setGroupName: setGroupName, setShowFolderList: setShowFolderList }}/>) : (<>
          <FlatList ref={flatListRef} contentContainerStyle={[{
            padding: imageMargin,
        }, imageListOption === null || imageListOption === void 0 ? void 0 : imageListOption.containerStyle]} initialNumToRender={imageListOption === null || imageListOption === void 0 ? void 0 : imageListOption.initialNumToRender} onEndReachedThreshold={0.5} onEndReached={_onEndReached} renderItem={function (_a) {
        var item = _a.item;
        return (<ImageItem {...{
            item: item,
            imageMargin: imageMargin,
            selectedMarker: selectedMarker,
            imageSize: imageSize,
            onClick: selectImage,
            setZoomImage: setZoomImage,
        }}/>);
    }} numColumns={imagesPerRow} keyExtractor={function (item, i) { return "photo-selector-" + i; }} data={data} ListEmptyComponent={<>
                {!loadingMore && (<>
                    {(imageListOption === null || imageListOption === void 0 ? void 0 : imageListOption.ListEmptyComponent) || (<Text style={{ textAlign: 'center' }}>
                        No Photos...
                      </Text>)}
                  </>)}
              </>} ListFooterComponent={<>{hasNextPage && <ActivityIndicator size="large"/>}</>}/>
          <Modal visible={!!zoomImage} onRequestClose={function () {
        setZoomImage(undefined);
    }}>
            {zoomImage && (<ImageZoom cropWidth={windowWidth} cropHeight={windowHeight} imageWidth={windowWidth} imageHeight={windowHeight} enableSwipeDown={true} onSwipeDown={function () {
        setZoomImage(undefined);
    }}>
                <Image style={{
        width: windowWidth,
        height: windowHeight,
    }} resizeMode="contain" resizeMethod="scale" source={{
        uri: zoomImage,
    }}/>
              </ImageZoom>)}

            <TouchableOpacity style={[
        styles.close,
        zoomImageOption === null || zoomImageOption === void 0 ? void 0 : zoomImageOption.closeContainerStyle,
    ]} onPress={function () {
        setZoomImage(undefined);
    }}>
              {(zoomImageOption === null || zoomImageOption === void 0 ? void 0 : zoomImageOption.closeButton) || (<Image source={require('./assets/close.png')} style={{ width: '100%', height: '100%' }}/>)}
            </TouchableOpacity>
          </Modal>
        </>)}
    </>);
};
export default PhotoSelector;
var styles = StyleSheet.create({
    loader: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    close: {
        position: 'absolute',
        right: 30,
        top: 40,
        width: 30,
        height: 30,
    },
});
