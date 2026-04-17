import { StatusBar } from 'expo-status-bar';
import { Slot } from 'expo-router';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Screen from '../components/Screen';

const RootLayout = () => {
   return (
      <GestureHandlerRootView style={styles.container}>
         <SafeAreaProvider>
            <KeyboardProvider>
               <StatusBar style="auto" />
               <Screen>
                  <Slot />
               </Screen>
            </KeyboardProvider>
         </SafeAreaProvider>
      </GestureHandlerRootView>
   );
};

export default RootLayout;

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
});
