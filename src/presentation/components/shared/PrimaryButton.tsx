import { Platform, Pressable, StyleSheet, Text } from 'react-native';

interface PrimaryButtonProps {
  handleOnPress?: () => void;
  handleOnLongPress?: () => void;
  label: string;
}

export const PrimaryButton = ({
  handleOnLongPress,
  handleOnPress,
  label,
}: PrimaryButtonProps) => {
  return (
    <Pressable
      onPress={handleOnPress}
      onLongPress={handleOnLongPress}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Text style={{ color: Platform.OS === 'android' ? 'white' : '#4746AB' }}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
  },
});
