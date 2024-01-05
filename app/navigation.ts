import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Auth: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();
