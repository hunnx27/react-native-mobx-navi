import React from 'react';
import { View, Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types';
type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

function DetailScreen({ route }: Props) {
  return (
    <View>
      <Text>Detail id: {route.params.id}</Text>
    </View>
  );
}

export default DetailScreen;
