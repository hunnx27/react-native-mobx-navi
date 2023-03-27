import React from 'react';
import { Button, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
function HomeScreen({ navigation }: Props) {
  return (
    <View>
      <Button
        title="Detail 열기"
        onPress={() => navigation.navigate('Detail', { id: 1 })}
      />
    </View>
  );
}

export default HomeScreen;
