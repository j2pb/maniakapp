import React, { useContext } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AuthContext } from '../App'

const ImageList = () => {
    const { logOut } = useContext(AuthContext);
    return (
        <SafeAreaView style={styles.body}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.sectionContainer}>
                    <Text>ImageList Screen</Text>
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
export default ImageList