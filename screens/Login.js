import React, { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import { AuthContext } from '../App'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useContext(AuthContext);

    return (
        <View>
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