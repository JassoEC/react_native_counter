import { useState } from 'react';
import { Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import { globalStyles } from '../theme/global.styles';

export const CounterM3Screen = () => {
  const [count, setCount] = useState(0);

  const handleOnPress =
    (value: number = 1) =>
    () => {
      setCount(prev => (prev += value));
    };

  const handleOnLongPress = () => {
    setCount(0);
  };

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>

      <FAB
        onPress={handleOnPress()}
        onLongPress={handleOnLongPress}
        style={globalStyles.fab}
        icon={'add-outline'}
      />
    </View>
  );
};
