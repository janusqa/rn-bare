import { StatusBar } from 'expo-status-bar';
import { Slot } from 'expo-router';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import {
   SafeAreaProvider,
   useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const RootLayout = () => {
   const insets = useSafeAreaInsets();

   return (
      <GestureHandlerRootView style={styles.container}>
         <SafeAreaProvider>
            <KeyboardProvider>
               <StatusBar />
               <View
                  style={[
                     styles.screen,
                     {
                        paddingTop: insets.top,
                        paddingLeft: insets.left,
                        paddingRight: insets.right,
                        paddingBottom: insets.bottom,
                     },
                  ]}
               >
                  <Slot />
               </View>
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
   screen: {
      flex: 1,
      backgroundColor: 'red',
   },
});
