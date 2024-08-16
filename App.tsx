//Importações
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from "react";

//Componentes
import { Themes } from './global/theme';

//Telas
import { InitialScreen } from './src/pages/Screen-Initial';

//Importação de fonts
import useCustomFonts from "./global/useFonts";

export default function App() {
  //Carregando as fontes
  const [fontsLoaded] = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:`${Themes.colors.bacgroundScreens}`}}>
      <ThemeProvider theme={Themes}>
        <StatusBar
          backgroundColor="transparent"
          translucent
        />
        <InitialScreen></InitialScreen>
      </ThemeProvider>
    </SafeAreaView>
  );
}