import React from 'react';
import {
    SafeAreaView,
    View,
    Text, Button, StyleSheet
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.body}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.sectionContainer}>
                    <Text>Home Screen</Text>
                    <Button
                        title="Go to ImageList"
                        onPress={() => navigation.navigate('ImageList')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    body: {
        backgroundColor: Colors.white,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sectionContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default Home