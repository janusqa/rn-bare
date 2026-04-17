import { router } from 'expo-router';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const Tab2Screen1 = () => {
   return (
      <View style={styles.container}>
         <Text>Tab 2 / Screen 1</Text>
         <Pressable
            onPress={() =>
               router.navigate({ pathname: '/appnav/tab2/tab2screen2' })
            }
         >
            <Text style={styles.link}>Go to Tab 2 / Screen 2</Text>
         </Pressable>
      </View>
   );
};

export default Tab2Screen1;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'yellow',
   },
   link: {
      fontSize: 20,
      margin: 20,
      color: 'blue',
   },
});
