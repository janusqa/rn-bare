import { StyleSheet, View, type ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
   children: React.ReactNode;
   style?: ViewStyle;
   onLayoutRootView?: () => void;
}

const Screen = ({ children }: Props) => {
   const insets = useSafeAreaInsets();

   return (
      <View
         style={[
            styles.container,
            {
               paddingTop: insets.top,
               paddingLeft: insets.left,
               paddingRight: insets.right,
               paddingBottom: insets.bottom,
            },
         ]}
      >
         {children}
      </View>
   );
};

export default Screen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'red',
   },
});
