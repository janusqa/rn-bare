import { Text, View, StyleSheet } from 'react-native';

const Tab1Screen2 = () => {
   return (
      <View style={styles.container}>
         <Text>Tab 1 / Screen 2</Text>
      </View>
   );
};

export default Tab1Screen2;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'yellow',
   },
});
