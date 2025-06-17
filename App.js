import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Main from "./Main";
import Orders from "./src/screens/Orders";
import Contact from "./src/screens/Contact";
import Salgados from "./src/screens/Salgados";
import Doces from "./src/screens/Doces";
import Bolos from "./src/screens/Bolos";
import Notificacoes from "./src/screens/Notificacoes";
import Carrinho from "./src/screens/Carrinho";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Salgados" component={Salgados} />
        <Stack.Screen name="Doces" component={Doces} />
        <Stack.Screen name="Bolos" component={Bolos} />
        <Stack.Screen name="Notificacoes" component={Notificacoes} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

