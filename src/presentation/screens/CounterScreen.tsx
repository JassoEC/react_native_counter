import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components';
import { Button } from 'react-native-paper';

export const CounterScreen = () => {
  const [count, setCount] = useState(0);

  const handleOnPress = (value: number) => () => {
    setCount(prev => (prev += value));
  };

  const handleOnLongPress = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>

      {/* <PrimaryButton
        handleOnPress={handleOnPress(1)}
        handleOnLongPress={() => setCount(0)}
        label="Increment"
      /> */}

      <Button
        onPress={handleOnPress(1)}
        onLongPress={handleOnLongPress}
        mode="contained"
      >
        Increment
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: '300',
    color: 'black',
  },
});
