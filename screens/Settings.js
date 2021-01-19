import React, { useContext } from 'react';
import {
    SafeAreaView,
    View,
    Text, Button, StyleSheet, Image
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AuthContext } from '../App'

const Settings = ({ navigation }) => {
    const { logOut } = useContext(AuthContext);
    return (
        <SafeAreaView style={styles.body}>
            <Image
                source={{ uri: 'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }}
                style={[StyleSheet.absoluteFillObject, { opacity: .4 }]}
                blurRadius={70}
            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.sectionContainer}>
                    <Text>Settings</Text>
                    <Button
                        title="logOut"
                        onPress={() => logOut()}
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
export default Settings