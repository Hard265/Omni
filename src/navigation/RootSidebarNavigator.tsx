import { createDrawerNavigator } from '@react-navigation/drawer';

import Sidebar from '@/screens/(modals)/sidebar';
import HomeTabNavigator from '@/navigation/HomeTabNavigator';

const Drawer = createDrawerNavigator();

export default function HomeSidebarLayout() {
  return (
    <Drawer.Navigator drawerContent={Sidebar}>
      <Drawer.Screen 
        name="HomeTabLayout" 
        component={HomeTabNavigator}
        options={{
          headerShown: false
        }}
      />
    </Drawer.Navigator>
  );
}
