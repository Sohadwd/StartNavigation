import {Navigation} from "react-native-navigation";
import {APP_NAME_PREFIX} from "./utilis/constant";
import AuthScreen from "./screens/Home/Home";
import SecondScreen from "./screens/SecondScreen/SecondScreen";
import startTabs from "./screens/MainTabs/startMainTabs";
import FirstScreenTabIcon from "./screens/FirstScreenTabIcon/FirstScreenTabIcon";
import SecondScreenTabIcon from "./screens/SecondScreenTabIcon/SecondScreenTabIcon";
import SideDrawer from "./screens/SideDrawer/SideDrawer";
import ThirdScreenTabIcon from "./screens/ThidScreenTabIcon/ThirdScreenTabIcon";
import FourthScreenTabIcon from "./screens/FourthScreenTabIcon/FourthScreenTabIcon";

export function registerScreens(store, Provider) {
    Navigation.registerComponent(APP_NAME_PREFIX + "SideDrawer", () => SideDrawer, store, Provider);
    Navigation.registerComponent(APP_NAME_PREFIX + "startTabs", () => startTabs, store, Provider);
    Navigation.registerComponent(APP_NAME_PREFIX + "AuthScreen", () => AuthScreen, store, Provider);
    Navigation.registerComponent(APP_NAME_PREFIX + "SecondScreen", () => SecondScreen, store, Provider);
    Navigation.registerComponent(APP_NAME_PREFIX + "FirstScreenTabIcon", () => FirstScreenTabIcon, store, Provider);
    Navigation.registerComponent(APP_NAME_PREFIX + "SecondScreenTabIcon", () => SecondScreenTabIcon, store, Provider);
    Navigation.registerComponent(APP_NAME_PREFIX + "ThirdScreenTabIcon", () => ThirdScreenTabIcon, store, Provider);
    Navigation.registerComponent(APP_NAME_PREFIX + "FourthScreenTabIcon", () => FourthScreenTabIcon, store, Provider);

}
