import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeSidebar from '@/components/Layouts/HomeSidebar';
import HomeTabLayout from '@/components/Layouts/HomeTabLayout';

const Drawer = createDrawerNavigator();

export default function HomeSidebarLayout() {
  return (
    <Drawer.Navigator drawerContent={HomeSidebar}>
      <Drawer.Screen 
        name="HomeTabLayout" 
        component={HomeTabLayout}
        options={{
          headerShown: false
        }}
      />
    </Drawer.Navigator>
  );
}
