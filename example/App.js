import {Navigation} from "react-native-navigation";
import {Provider} from "react-redux";
import AuthScreen from "./src/screens/Home/Home";
import startTabs from "./src/screens/MainTabs/startMainTabs";
import SecondScreen from "./src/screens/SecondScreen/SecondScreen";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";
import FirstScreenTabIcon from "./src/screens/FirstScreenTabIcon/FirstScreenTabIcon";
import SecondScreenTabIcon from "./src/screens/SecondScreenTabIcon/SecondScreenTabIcon";
import configureStore from "./src/store/configureStore";

const store = configureStore();

//Register Screen
Navigation.registerComponent(
    "awesome-places.AuthScreen",

    () => AuthScreen,
    store,
    Provider
);

Navigation.registerComponent(
    "awesome-places.SecondScreen",
    () => SecondScreen,
    store,
    Provider
);
Navigation.registerComponent(
    "awesome-places.startTabs",
    () => startTabs,
    store,
    Provider
);
Navigation.registerComponent("awesome-places.SideDrawer", () => SideDrawer);

Navigation.registerComponent(
    "awesome-places.FirstScreenTabIcon",
    () => FirstScreenTabIcon,
    store,
    Provider
);
Navigation.registerComponent(
    "awesome-places.SecondScreenTabIcon",
    () => SecondScreenTabIcon,
    store,
    Provider
);

//start the App
Navigation.startSingleScreenApp({
    screen: {
        // AuthScreen
        screen: "awesome-places.AuthScreen",

        navigatorButtons: {
            leftButtons: [
                {
                    icon: require("./images/menuButton.png"),
                    title: "Menu",
                    id: "sideDrawerToggle"
                }
            ]
        },

        navigatorStyle: {
            navBarBackgroundColor: "#3F51B5",
            navBarNoBorder: true,
            navBarButtonColor: "white"
        }
    },
    drawer: {
        left: {
            screen: "awesome-places.SideDrawer"
        }
    }
});
