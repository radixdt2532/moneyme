import React from 'react';
import {
  Platform,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../../Constants/Color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props {
  text: string | number;
  disabled?: boolean;
  onPress?: () => void;
  containerStyle?: ViewStyle;
}
const AppButton: React.FC<Props> = ({
  onPress = () => null,
  containerStyle = {},
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, containerStyle]}
      disabled={disabled}>
      <MaterialIcons name="arrow-forward-ios" size={30} color={Colors.white} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.black,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: 'transparent',
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 2 },
        shadowColor: Colors.white,
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 5,
      },
    }),
  }
});
export default AppButton;
