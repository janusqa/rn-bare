import { Text, View, StyleSheet } from 'react-native';

const Tab2Screen2 = () => {
   return (
      <View style={styles.container}>
         <Text>Tab 2 / Screen 2</Text>
      </View>
   );
};

export default Tab2Screen2;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'yellow',
   },
});
