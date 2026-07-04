import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStack from './src/navigation/RootStack';
import { StatusBar, useColorScheme } from 'react-native';

function App() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    StatusBar.setBarStyle(
      colorScheme === 'dark' ? 'light-content' : 'dark-content',
      true
    );
  }, [colorScheme]);

  return (
    <SafeAreaProvider>
      <RootStack />
    </SafeAreaProvider>
  );
}

export default App;