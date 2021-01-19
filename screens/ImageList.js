import React, { useEffect, useState, useRef } from 'react';
import { StatusBar, Image, Animated, Text, View, StyleSheet } from 'react-native';
import service from '../_services'

const SPACING = 20;
const IMG_SIZE = 70;
const ITEM_SIZE = IMG_SIZE + SPACING * 3;

const ImageList = ({ navigation, route }) => {
    const [images, setimages] = useState([]);
    const scrollY = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (route.params.authToken) {
            getImages(route.params.authToken)
        }
    }, [route.params.authToken]);
    const getImages = (authToken) => {
        service.getImages(authToken).then((r) => {
            setimages(r)
        })
    }
    return <View style={styles.body}>
        <Image
            source={{ uri: 'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }}
            style={[StyleSheet.absoluteFillObject, { opacity: .4 }]}
            blurRadius={70}
        />
        <Animated.FlatList
            data={images}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{ padding: SPACING, paddingTop: StatusBar.currentHeight || 42 }}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true }
            )}
            renderItem={({ item, index }) => {
                const scale = scrollY.interpolate({
                    inputRange: [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)],
                    outputRange: [1, 1, 1, 0],
                })
                const opacity = scrollY.interpolate({
                    inputRange: [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 1)],
                    outputRange: [1, 1, 1, 0],
                })
                return <Animated.View style={[styles.container, {
                    marginBottom: SPACING, padding: SPACING,
                    opacity,
                    transform: [{ scale }]
                }]}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.img}
                    />
                    <View style={{ flex: 1 }}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text numberOfLines={2} style={styles.description}>{item.description}</Text>
                    </View>
                </Animated.View>
            }}
        />
    </View>
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.85)',
        borderRadius: 12,
        shadowColor: '#000',
        shadowRadius: 30,
        shadowOpacity: .2,
        shadowOffset: {
            width: 0,
            height: 40
        },
    },
    img: {
        marginRight: SPACING,
        width: IMG_SIZE,
        height: IMG_SIZE,
        borderRadius: IMG_SIZE
    },
    title: {
        fontSize: 22,
        marginBottom: 5,
        fontWeight: '500',
        color: '#222'
    },
    description: {
        fontSize: 12,
        marginBottom: 8,
        letterSpacing: 1,
        opacity: .7,
        flex: 1
    },
    sectionContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ImageList