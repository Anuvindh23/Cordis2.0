import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuickMeasureInProgressScreen from '../screens/QuickMeasureInProgressScreen';
import QuickMeasureCompleteScreen from '../screens/QuickMeasureCompleteScreen';
import ResultScreen from '../screens/ResultScreen';
import MainTabs from './MainTabs';
import type { MainTabParamList } from './MainTabs';

export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<MainTabParamList>;
  QuickMeasureInProgress: undefined;
  QuickMeasureComplete: undefined;
  Result: { bpm: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs">
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="QuickMeasureInProgress"
          component={QuickMeasureInProgressScreen}
          options={{ presentation: 'fullScreenModal', headerShown: false }}
        />
        <Stack.Screen
          name="QuickMeasureComplete"
          component={QuickMeasureCompleteScreen}
          options={{ presentation: 'fullScreenModal', headerShown: false }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ presentation: 'fullScreenModal', headerShown: false }}
        />
      </Stack.Navigator>
      </NavigationContainer>
  );
}