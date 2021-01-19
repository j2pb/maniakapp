import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StatusBar, Image, StyleSheet } from 'react-native';
import { AuthContext } from '../App'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useContext(AuthContext);

    return (
        <View style={styles.body}>
            <StatusBar hidden />
            <Image
                source={{ uri: 'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }}
                style={[StyleSheet.absoluteFillObject, { opacity: .4 }]}
                blurRadius={70}
            />
            <View style={styles.login}>

                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    value={username}
                    onChangeText={setUsername}
                    style={{ width: 200, height: 40, borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 10 }}
                />
                <TextInput
                    style={{ width: 200, height: 40, borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 10 }}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <Button title="Login" onPress={() => login({ username, password })} />
            </View>
        </View>
    );
}
export default Login;
const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    login: {
        flex: 1,
        justifyContent: 'center'
    }
});