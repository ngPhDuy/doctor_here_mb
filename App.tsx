import "./global.css";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, Text, Button, StatusBar } from "react-native";

import Home from "./screens/Home";
import MessagesScreen from "./screens/message/MessagesScreen";
import AppointmentScreen from "./screens/appointment/AppointmentScreen";
import AppointmentDetails from "./screens/appointment/AppointmentDetails";
import FindDoctor from "./screens/FindDoctor";
import FavoriteDoctor from "./screens/FavoriteDoctor";
import OfflineAppointment from "./screens/OfflineAppointment";
import OnlineAppointment from "./screens/OnlineAppointment";
import ConfirmAppointment from "./screens/ConfirmAppointment";
import {
  HomeIcon,
  MessageIcon,
  AppointmentIcon,
  ProfileIcon,
} from "./components/icons/TabNavIcons";
import DoctorDetail from "./screens/DoctorDetail";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const ProfileScreen = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Text>👤 Profile</Text>
  </SafeAreaView>
);

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="FindDoctorScreen"
      component={FindDoctor}
      options={{
        title: "Tìm kiếm bác sĩ",
        headerTitleAlign: "center",
      }}
    />
    <Stack.Screen
      name="FavoriteDoctor"
      component={FavoriteDoctor}
      options={{ title: "Bác sĩ yêu thích", headerTitleAlign: "center" }}
    />
    <Stack.Screen
      name="DoctorDetail"
      component={DoctorDetail}
      options={({ route }) => ({
        title: "Thông tin chi tiết",
        headerTitleAlign: "center",
      })}
    />
    <Stack.Screen
      name="OfflineAppointment"
      component={OfflineAppointment}
      options={{ title: "Đặt lịch khám", headerTitleAlign: "center" }}
    />
    <Stack.Screen
      name="OnlineAppointment"
      component={OnlineAppointment}
      options={{ title: "Đặt lịch tư vấn", headerTitleAlign: "center" }}
    />
    <Stack.Screen
      name="ConfirmAppointment"
      component={ConfirmAppointment}
      options={{ title: "Xác nhận thông tin", headerTitleAlign: "center" }}
    />
  </Stack.Navigator>
);

const AppointmentStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="AppointmentScreen"
      component={AppointmentScreen}
      options={{ title: "Lịch hẹn của tôi", headerTitleAlign: "center" }}
    />
    <Stack.Screen
      name="AppointmentDetails"
      component={AppointmentDetails}
      options={{ title: "Chi tiết lịch hẹn", headerTitleAlign: "center" }}
    />
  </Stack.Navigator>
);
export default function App() {
  return (
    <>
      <StatusBar barStyle="default" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              switch (route.name) {
                case "HomeStack":
                  return <HomeIcon color={color} width={size} height={size} />;
                case "Messages":
                  return (
                    <MessageIcon color={color} width={size} height={size} />
                  );
                case "AppointmentStack":
                  return (
                    <AppointmentIcon color={color} width={size} height={size} />
                  );
                case "Profile":
                  return (
                    <ProfileIcon color={color} width={size} height={size} />
                  );
                default:
                  return null;
              }
            },
            tabBarActiveTintColor: "#1C1E20",
            tabBarInactiveTintColor: "#9CA3AF",
          })}
        >
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{ title: "Trang chủ", headerShown: false }}
          />
          <Tab.Screen
            name="Messages"
            component={MessagesScreen}
            options={{ title: "Tin nhắn", headerTitleAlign: "center" }}
          />
          <Tab.Screen
            name="AppointmentStack"
            component={AppointmentStack}
            options={{
              title: "Lịch hẹn",
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ title: "Hồ sơ", headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
