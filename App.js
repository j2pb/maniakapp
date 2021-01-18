/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { createContext, useEffect, useReducer, useMemo } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Reactotron from 'reactotron-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import ImageList from './screens/ImageList'
import Login from './screens/Login'
import Loading from './screens/Loading'

export const AuthContext = createContext();
const Stack = createStackNavigator();

const App: () => React$Node = () => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'GET_TOKEN':
          return {
            ...prevState,
            authToken: action.token,
            loading: false,
          };
        case 'LOGIN':
          return {
            ...prevState,
            isLogOut: false,
            authToken: action.token,
          };
        case 'LOGOUT':
          return {
            ...prevState,
            isLogOut: true,
            authToken: null,
          };
      }
    },
    {
      loading: true,
      isLogOut: false,
      authToken: null,
    }
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let authToken;
      try {
        authToken = await AsyncStorage.getItem('authToken');
        Reactotron.log("token", authToken)
      } catch (e) {
        Reactotron.log("error", e)
      }
      dispatch({ type: 'GET_TOKEN', token: authToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      login: async data => {
        Reactotron.log("login", data)
        try {
          await AsyncStorage.setItem('authToken', "dummytoken")
        } catch (e) {
          Reactotron.log(e)
        }
        dispatch({ type: 'LOGIN', token: 'dummytoken' });
      },
      logOut: () => {
        dispatch({ type: 'LOGOUT' })
      }
    }),
    []
  );
  return (
    <>
      <SafeAreaProvider>
        <AuthContext.Provider value={authContext}>
          <StatusBar barStyle="dark-content" />
          <NavigationContainer>
            <Stack.Navigator>
              {state.loading ? (
                <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
              ) : state.authToken == null ? (
                <Stack.Screen name="Login" component={Login} />
              ) : (
                    <Stack.Screen name="ImageList" component={ImageList} />
                  )}
            </Stack.Navigator>
          </NavigationContainer>
        </AuthContext.Provider>
      </SafeAreaProvider>
    </>
  );
};
export default App;
