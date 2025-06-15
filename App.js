import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Main from "./Main/";
import Contact from "./src/screens/Contact";
import Orders from "./src/screens/Orders";
import Salgados from "./src/screens/Salgados";
import Doces from "./src/screens/Doces";
import Bolos from "./src/screens/Bolos";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="Orders" component={Orders} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="Salgados" component={Salgados} />
        <Drawer.Screen name="Doces" component={Doces} />
        <Drawer.Screen name="Bolos" component={Bolos} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
