const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Splash from "./screens/Splash";
import SplashPushNotifications from "./screens/SplashPushNotifications";
import SplashPhotoSkins from "./screens/SplashPhotoSkins";
import SplashCheckIn from "./screens/SplashCheckIn";
import Login from "./screens/Login";
import CreateAccount from "./screens/CreateAccount";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
              options={{ footerShown: false }}
            />
            <Stack.Screen
              name="SplashPushNotifications"
              component={SplashPushNotifications}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashPhotoSkins"
              component={SplashPhotoSkins}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="SplashCheckIn"
              component={SplashCheckIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
