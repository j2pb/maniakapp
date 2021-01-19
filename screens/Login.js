import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StatusBar, Image, StyleSheet } from 'react-native';
import { AuthContext } from '../App'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useContext(AuthContext);

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar hidden />
            <Image
                source={{ uri: 'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }}
                style={[StyleSheet.absoluteFillObject, { opacity: .4 }]}
                blurRadius={70}
            />
            <TextInput
                placeholder="Email"
                value={username}
                onChangeText={setUsername}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={() => login({ username, password })} />
        </View>
    );
}
export default Login;